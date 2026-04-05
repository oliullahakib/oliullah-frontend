import React from 'react';
import Image from 'next/image';

// Import images
import mainImg from '../assets/images/pexels-a-darmel-7710219.png';
import img1 from '../assets/images/pexels-yankrukov-7793987.png';
import img2 from '../assets/images/jozsef-hocza-hhASRAL_1io-unsplash 1.png';
import img3 from '../assets/images/pexels-tima-miroshnichenko-4841692.png';

// Import mini-avatars
import avatar1 from '../assets/images/pexels-mizunokozuki-12903131.png';
import avatar2 from '../assets/images/pexels-mizunokozuki-12903144.png';
import avatar3 from '../assets/images/pexels-mizunokozuki-12903252.png';
import TitleBadge from './Shared/TitleBadge';

const NoWorries = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Large Image (Desktop Only) */}
          <div className="hidden lg:block lg:flex-1 relative aspect-4/4.5 rounded-3xl overflow-hidden border border-neutral-800/50">
            <Image
              src={mainImg}
              alt="Person concentrating"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>

          {/* Right Column: Content Card */}
          <div className="flex-[1.2] bg-neutral-800/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-neutral-800/50 relative overflow-hidden group">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 lg:mb-20">
              
              {/* Badge */}
              <TitleBadge title="No worries" className='w-40' />

              {/* Social Proof (Avatar Stack) */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[avatar1, avatar2, avatar3].map((avatar, i) => (
                    <div key={i} className="relative w-8 h-8 rounded-full border-2 border-neutral-900 overflow-hidden shadow-lg">
                      <Image src={avatar} alt="Student" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-neutral-400 text-xs md:text-sm font-medium">
                  Join with 5K other students
                </p>
              </div>

            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
              
              {/* Text Block */}
              <div className="flex-1 space-y-6 lg:space-y-10">
                <p className="text-neutral-500 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-[400px]">
                  The ability to concentrate deeply is the ultimate productivity hack
                </p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                  And fortunately it’s a skill you can train & develop.
                </h3>
              </div>

              {/* Right Strip: Horizontal on Mobile, Vertical on Tablet/Desktop */}
              <div className="w-full md:w-auto flex flex-row md:flex-col gap-3 md:gap-4 items-center">
                {[img2, img1, img3].map((img, i) => (
                  <div 
                    key={i} 
                    className="relative flex-1 md:flex-none w-full md:w-28 lg:w-36 aspect-square md:aspect-4/5 rounded-xl md:rounded-2xl overflow-hidden border border-neutral-800/50 transition-all duration-500 hover:scale-105"
                  >
                    <Image src={img} alt="Focus visual" fill className="object-cover" />
                  </div>
                ))}
              </div>

            </div>

            {/* Glowing background hint */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 blur-[100px] pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NoWorries;
