import React from 'react';
import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';

// Import icons
import bulbIcon from '../assets/icons/bulb.png';
import brainIcon from '../assets/icons/brain.png';
import signIcon from '../assets/icons/sign.png';
import hubIcon from '../assets/icons/hub.png';

const Blueprint = () => {
  const steps = [
    {
      icon: bulbIcon,
      text: "Develop laser-sharp focus & eliminate distractions.",
    },
    {
      icon: brainIcon,
      text: "Master deep work techniques for smarter productivity.",
    },
    {
      icon: signIcon,
      text: "Overcome procrastination & get more done.",
    },
    {
      icon: hubIcon,
      text: "Build lasting habits for long-term success.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-1400px mx-auto px-6 flex flex-col items-center">

        {/* Top Badge */}
        <TitleBadge className="mb-8" >
          <span className="text-white">The Deep Work Blueprint</span>
        </TitleBadge>

        {/* Heading */}
        <h2 className="max-w-[800px] text-center text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-24 leading-[1.1]">
          A self-paced, results-driven <br className="hidden md:block" />
          course designed to help you
        </h2>

        {/* Timeline Content - Side by Side Layout */}
        <div className="relative w-full max-w-[500px] mx-auto">

          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-12 lg:gap-20 group">
                
                {/* Vertical Line Connector (Spans the height of the step) */}
                {index !== steps.length + 1 && (
                  <div className="absolute left-[11px] top-16 bottom-10 w-0.5 bg-linear-to-b from-primary-500/20 via-primary-500 to-primary-500/20 z-0"></div>
                )}

                {/* Left Side: Timeline Dot */}
                <div className="relative flex flex-col items-center shrink-0 pt-3 z-10">
                  <div className="w-6 h-6 bg-primary-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
                </div>

                {/* Right Side: Step Content (Icon + Text) */}
                <div className="flex flex-col items-center text-center pb-12 lg:pb-32">
                  <Image
                    src={step.icon}
                    alt="Step Icon"
                    width={80}
                    height={80}
                    className="w-30 h-30 object-contain relative z-10 "
                  />
                  <h6 className="text-neutral-300 font-medium max-w-[150px] ">
                    {step.text}
                  </h6>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Blueprint;
