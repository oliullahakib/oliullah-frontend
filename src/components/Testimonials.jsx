'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';
import playButtonIcon from '../assets/icons/Play-Button.png';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const isVideo = testimonial.type === 'video';

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: false }}
      className="relative shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 transition-all duration-700"
    >
      <div className={`relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-neutral-800/50 group ${!isVideo ? 'bg-neutral-900/40 p-8 flex flex-col justify-between' : ''}`}>
        
        {/* Background Image for Video Testimonials */}
        {isVideo && (
          <>
            <Image 
              src={testimonial.bgImage} 
              alt={testimonial.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-500/40"
              >
                <Image src={playButtonIcon} alt="Play" width={240} height={240} className="opacity-90" />
              </motion.div>
            </div>
          </>
        )}

        {/* Content Area */}
        <div className={`relative z-10 h-full flex flex-col ${isVideo ? 'p-8 justify-end' : ''}`}>
          
          {/* Avatar (Top for text, bottom-ish for video) */}
          <div className={`relative w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-800 mb-6 ${isVideo ? 'mb-4' : ''}`}>
            <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
          </div>

          {!isVideo && (
            <p className="text-neutral-300 text-lg font-medium leading-relaxed mb-8 italic">
              "{testimonial.message}"
            </p>
          )}

          <div>
            <h4 className="text-white text-xl font-bold">{testimonial.name}</h4>
            <p className="text-neutral-500 font-medium">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      type: 'text',
      name: 'Alex Carter',
      role: 'Freelance Designer',
      message: 'As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!',
      avatar: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775411909/pexels-annushka-ahuja-8055837_dafvqs.png'
    },
    {
      type: 'video',
      name: 'Daniel Foster',
      role: 'Content creator',
      avatar: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412743/pexels-tima-miroshnichenko-4841703_iuxt3z.png',
      bgImage: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412753/pexels-anthonyshkraba-production-8278849_ltseun.png'
    },
    {
      type: 'text',
      name: 'Mark Davidson',
      role: 'Software Developer',
      message: 'I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!',
      avatar: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png'
    },
    {
      type: 'video',
      name: 'Tom David',
      role: 'Entrepreneur',
      avatar: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775411904/pexels-a-darmel-7710219_lbrzz4.png',
      bgImage: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775411860/jozsef-hocza-hhASRAL_1io-unsplash_1_spnvhd.png'
    },
    {
      type: 'text',
      name: 'Sarah Jenkins',
      role: 'Project Manager',
      message: 'The systematic approach to building focus habits changed my entire workflow. I can now finish complex tasks in half the time it used to take me. Highly recommended!',
      avatar: 'https://res.cloudinary.com/dohsenfjm/image/upload/v1775411909/pexels-annushka-ahuja-8055837_dafvqs.png'
    }
  ];

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1 > testimonials.length - visibleCount ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? testimonials.length - visibleCount : prev - 1));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 my-32">
        
        {/* Header Area */}
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center mb-20 lg:mb-32"
        >
          <motion.div variants={fadeInUp}>
            <TitleBadge className="mb-8">
              <span className="text-white">Testimonials</span>
            </TitleBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] pb-16 md:pb-40">
            Real Results from <br /> Real People
          </motion.h2>
        </motion.div>

        {/* Navigation & Stats row */}
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-row md:items-end justify-between gap-8 mb-12"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <h3 className="text-white text-2xl md:text-3xl font-bold">Join with 5K other students</h3>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <button 
              onClick={prevCard}
              className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={nextCard}
              className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-700 transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden -mx-3">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((test, i) => (
              <TestimonialCard key={i} testimonial={test} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
