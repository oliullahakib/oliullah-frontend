'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EnrollButton from './Shared/EnrollButton';
import playButtonIcon from '../assets/icons/Play-Button.png';
import texture from '../assets/texture.png';
import TitleBadge from './Shared/TitleBadge';

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-neutral-950">
      {/* Background Texture Overlay (Global) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${texture.src})`,
          backgroundSize: '100% 4px',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Bottom Textured Blue Background Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] z-0 bg-linear-to-b from-primary-500 to-primary-600">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${texture.src})`,
            backgroundSize: '100% 6px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
        {/* Glow at the top edge of the blue area */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary-500/50 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
        {/* Subtle gradient to blend */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950 to-transparent h-20"></div>
      </div>

      {/* Central Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[800px] bg-primary-600/10 blur-[150px] rounded-full z-0 opacity-50"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Countdown Badge */}
        <TitleBadge className="mb-8" >
          <span className="text-white">30% off until </span>
          <span className="text-white">4d : 2h : 41m : 17s</span>
        </TitleBadge>


        {/* Hero Content */}
        <h1 className="max-w-[800px] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Master Focus & Get <br />
          <span className="text-white/90">More Done in Less Time</span>
        </h1>

        <p className="max-w-[600px] text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed">
          A step-by-step system to eliminate procrastination, train your
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 items-center">
          <EnrollButton className="w-full sm:w-auto px-8 py-4" />
          <button className="w-full sm:w-auto px-8 py-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all">
            Curriculum
          </button>
        </div>

        {/* Video Preview */}
        <div className="relative w-full max-w-[1000px] aspect-video rounded-3xl overflow-hidden border border-neutral-800/50 shadow-2xl group">
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
        </div>
      </div>
    </section>
  );
};

export default Banner;


