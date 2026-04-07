'use client';

import React from 'react';
import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';
import { motion } from 'framer-motion';

const Motivation = () => {
    const images = ['https://res.cloudinary.com/dohsenfjm/image/upload/v1775412743/pexels-tima-miroshnichenko-4841703_iuxt3z.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411904/pexels-a-darmel-7710219_lbrzz4.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775412753/pexels-anthonyshkraba-production-8278849_ltseun.png']
  
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
        staggerChildren: 0.15
      }
    }
  };

  const imagePop = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    whileInView: { opacity: 1, scale: 1, rotate: 0 },
    viewport: { once: false },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-neutral-950">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center mt-32"
      >

        {/* Badge: "Are Distractions Holding You Back?" */}
        <motion.div variants={fadeInUp}>
          <TitleBadge className='w-60' >
            <span className="text-white">Are Distractions Holding You Back?</span>
          </TitleBadge>
        </motion.div>

        {/* Heading: Dual-tone / Faded effect */}
        <motion.h2 
          variants={fadeInUp}
          className="max-w-[1000px] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-20 leading-[1.2]"
        >
          <span className="text-white">
            If you struggle to focus, feel overwhelmed by end 
          </span>
          <span>l</span>
          <span className="text-neutral-600">
            ess tasks, or procrastinate instead of making progress, you're not alone.
          </span>
        </motion.h2>

        {/* Image Grid */}
        <div className="flex justify-center gap-2 w-full max-w-[900px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={imagePop}
              className="relative w-28 aspect-4/5 rounded-2xl overflow-hidden group border border-neutral-800/50"
            >
              <Image
                src={img}
                alt={`Pain point visual ${index + 1}`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Motivation;
