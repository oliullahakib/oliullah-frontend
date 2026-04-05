import React from 'react';
import Image from 'next/image';
import EnrollButton from './EnrollButton';
import logo from '../assets/icons/logo.png';
import toggleIcon from '../assets/icons/Toggle.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between border-b border-neutral-800/50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="PPA Logo"
            width={32}
            height={32}
            className="w-auto h-8"
          />   
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Overview', 'Curriculum', 'Testimonials', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-400 hover:text-neutral-0 transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-800 rounded-full transition-colors hidden sm:block">
            <Image
              src={toggleIcon}
              alt="Toggle"
              width={40}
              height={24}
              className="w-10 h-auto"
            />
          </button>
          <EnrollButton className="px-5 py-2 text-sm md:text-base" />
        </div>
      </div>
      {/* Blue Glow Line below Navbar */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-80 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
    </nav>
  );
};

export default Navbar;
