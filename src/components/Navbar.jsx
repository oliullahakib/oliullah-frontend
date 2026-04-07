'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EnrollButton from './Shared/EnrollButton';
import logo from '../assets/icons/logo.png';
import toggleIcon from '../assets/icons/Toggle.png';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between border-b border-neutral-800/50">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="PPA Logo"
            width={232}
            height={232}
            className="w-auto h-8"
            style={{ width: 'auto' }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-primary-400 hover:font-bold transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Switch Mode Button - Always Visible */}
          <button className="hover:bg-neutral-800 rounded-full transition-colors p-1">
            <Image
              src={toggleIcon}
              alt="Toggle"
              width={200}
              height={120}
              className="w-16 h-auto"
              style={{ height: 'auto' }}
            />
          </button>
          
          {/* Enroll Button - Hidden on Mobile/Tablet */}
          <div className="hidden lg:block">
            <EnrollButton className="px-5 py-2 text-sm md:text-base" />
          </div>

          {/* Mobile Menu Toggle - Visible on Mobile and Tablet (< lg) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'translate-x-full opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 top-20 z-40 bg-neutral-950 border-b border-neutral-800 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center py-12 gap-8 px-6 backdrop-blur-3xl bg-neutral-950/90">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 pb-6"
              >
                <EnrollButton className="px-8 py-3 text-lg" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blue Glow Line below Navbar */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-80 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
    </nav>
  );
};

export default Navbar;
