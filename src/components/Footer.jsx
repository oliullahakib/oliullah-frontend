'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const avatars = [
    'https://res.cloudinary.com/dohsenfjm/image/upload/v1775411909/pexels-annushka-ahuja-8055837_dafvqs.png',
    'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412743/pexels-tima-miroshnichenko-4841703_iuxt3z.png',
    'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
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

  const avatarPop = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false },
    transition: { type: "spring", stiffness: 260, damping: 20 }
  };

  return (
    <footer className="relative bg-neutral-800 pt-24 pb-12 overflow-hidden border-t border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Section: Brand + CTA Card */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20 lg:mb-32">

          {/* Brand Identity */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="max-w-[500px] flex flex-col items-center lg:text-left"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 tracking-tight">
              The Deep <br /> Work Blueprint
            </motion.h2>
            <motion.p variants={fadeInUp} className="w-56 text-center lg:w-full text-neutral-400 text-lg md:text-xl font-medium">
              Master Focus & Get More Done in Less Time
            </motion.p>
          </motion.div>

          {/* Featured Blue CTA Card */}
          <div className="relative w-full lg:w-[500px] bg-primary-600 rounded-[40px] p-10 flex flex-col justify-between min-h-[220px] group transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-primary-600/20">

            <div className="flex items-center justify-between">
              {/* Overlapping Avatars */}
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="flex -space-x-4"
              >
                {avatars.map((avatar, i) => (
                  <motion.div key={i} variants={avatarPop} className="relative w-12 h-12 rounded-full border-2 border-primary-600 overflow-hidden shadow-lg">
                    <Image src={avatar} alt="Student" fill sizes="48px" className="object-cover" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Button */}
              <motion.button 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false }}
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600 transition-transform duration-300 group-hover:translate-x-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </div>

            <motion.h3 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="text-white text-2xl font-bold mt-8"
            >
              Join with 5K other students
            </motion.h3>

            {/* Glowing background hint */}
            <div className="absolute -inset-1 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

        </div>
        <div className='w-full h-px bg-linear-to-r from-transparent via-primary-500 to-transparent'></div>
        
        {/* Bottom Tier: Links & Copyright */}
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="pt-12 border-t border-neutral-900 flex flex-col-reverse md:flex-row items-center justify-between gap-8"
        >

          <motion.p variants={fadeInUp} className="text-white font-medium text-sm md:text-base">
            © Copyright 2024, All Rights Reserved
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {['Overview', 'Curriculum', 'Testimonials', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                variants={fadeInUp}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-200 hover:text-neutral-0 transition-colors text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;