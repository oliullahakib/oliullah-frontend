'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EnrollButton from './Shared/EnrollButton';
import playButtonIcon from '../assets/icons/Play-Button.png';
import texture from '../assets/texture.png';
import TitleBadge from './Shared/TitleBadge';
import Link from 'next/link';

import { motion } from 'framer-motion';

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
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
    <section id='home' className="relative min-h-screen pt-60 pb-20 overflow-hidden bg-neutral-950">
      {/* Background Texture Overlay (Global) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${texture.src})`,
          backgroundSize: '100% 4px',
          backgroundRepeat: 'repeat'
        }}
      ></motion.div>

      {/* Bottom Textured Blue Background Layer - Rounded Stage */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[48%] md:top-[42%] bottom-0 left-0 right-0 z-0 bg-primary-600  overflow-hidden"
      >
        {/* Horizontal Line Texture (Increased visibility) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${texture.src})`,
            backgroundSize: '100% 6px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        {/* Glow & Gradient Overlays - Smoothed transition */}
        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-neutral-950 via-neutral-950/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-b from-primary-600/40 via-primary-700/70 to-primary-900/90 mix-blend-multiply"></div>
      </motion.div>

      {/* Central Gradient Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[800px] bg-primary-600/10 blur-[150px] rounded-full z-0 opacity-50"
      ></motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Countdown Badge */}
        <motion.div variants={fadeInUp}>
          <TitleBadge className="mb-8" >
            <span className="text-white">30% off until </span>
            <span className="text-white">4d : 2h : 41m : 17s</span>
          </TitleBadge>
        </motion.div>


        {/* Hero Content */}
        <motion.h1 
          variants={fadeInUp}
          viewport={{ once: false }}
          className="max-w-[800px] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Master Focus & Get <br />
          <span className="text-white/90">More Done in Less Time</span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          viewport={{once:false}}
          className="max-w-[600px] text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          A step-by-step system to eliminate procrastination, train your
          brain for deep work, and boost productivity effortlessly.
        </motion.p>

        {/* Actions */}
        <motion.div 
          variants={fadeInUp}
          className="flex gap-4 mb-20 items-center"
        >
          <EnrollButton className="w-full sm:w-auto px-8 py-4" />
          <Link href="#curriculum" className="w-full sm:w-auto px-8 py-4 bg-neutral-800 backdrop-blur-sm border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-700 transition-all">
            Curriculum
          </Link>
        </motion.div>

        {/* Video Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-[1000px] aspect-video rounded-3xl overflow-hidden border border-neutral-800/50 shadow-2xl group"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center cursor-pointer" onClick={handlePlayClick}>
              {/* Play Button Overlay */}
              <div className="relative z-20 transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={playButtonIcon}
                  alt="Play Video"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              {/* Poster Image (Placeholder) */}
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-at-night-21950-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-neutral-950/20"></div>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/5sLYAQS9sWQ?si=BC8Un30qGDWDpGbY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;


