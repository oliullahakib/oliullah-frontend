import React from 'react';
import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';

const Motivation = () => {
    const images = ['https://res.cloudinary.com/dohsenfjm/image/upload/v1775412743/pexels-tima-miroshnichenko-4841703_iuxt3z.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411904/pexels-a-darmel-7710219_lbrzz4.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775412753/pexels-anthonyshkraba-production-8278849_ltseun.png']
  return (
    <section className="relative py-32 overflow-hidden bg-neutral-950">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">

        {/* Badge: "Are Distractions Holding You Back?" */}
        <TitleBadge title="Are Distractions Holding You Back?" className='w-60' />

        {/* Heading: Dual-tone / Faded effect */}
        <h2 className="max-w-[1000px] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-20 leading-[1.2]">
          <span className="text-white">
            If you struggle to focus, feel overwhelmed by end
          </span>
          <span className="text-neutral-600">
            less tasks, or procrastinate instead of making progress, you're not alone.
          </span>
        </h2>

        {/* Image Grid */}
        <div className="flex justify-center gap-2 w-full max-w-[900px]">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-28 aspect-4/5 rounded-2xl overflow-hidden group border border-neutral-800/50"
            >
              <Image
                src={img}
                alt={`Pain point visual ${index + 1}`}
                fill
                className="object-cover  transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Motivation;
