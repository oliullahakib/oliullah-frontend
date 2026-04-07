'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';
import EnrollButton from './Shared/EnrollButton';
import { motion } from 'framer-motion';

// Import icons
import playButtonIcon from '../assets/icons/Play-Button.png';
import signIcon from '../assets/icons/sign.png';

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Module 1: Foundations of Deep Work",
      duration: "1.7h of video",
      lessons: [
        { title: "Understanding Focus & Distraction", duration: "14:23", preview: true },
        { title: "The Science Behind Deep Work", duration: "22:51", preview: false },
        { title: "Identifying Your Productivity Killers", duration: "34:42", preview: false },
        { title: "How to Strengthen Your Attention Span", duration: "27:08", preview: false },
      ]
    },
    {
      title: "Module 2: Building Your Deep Work Routine",
      duration: "1.3h of video",
      lessons: [
        { title: "The Ideal Workspace Setup", duration: "18:45", preview: false },
        { title: "Time Blocking & Deep Work Rituals", duration: "25:30", preview: false },
        { title: "Managing Energy vs. Time", duration: "21:15", preview: false },
      ]
    },
    {
      title: "Module 3: Eliminating Procrastination",
      duration: "1.5h of video",
      lessons: [
        { title: "The Psychology of Delay", duration: "20:10", preview: false },
        { title: "Strategies to Beat Resistance", duration: "28:40", preview: false },
        { title: "Building an Unstoppable Momentum", duration: "31:20", preview: false },
      ]
    },
    {
      title: "Module 4: Advanced Focus & Productivity Hacks",
      duration: "1.2h of video",
      lessons: [
        { title: "The Flow State Formula", duration: "24:12", preview: false },
        { title: "Digital Minimialism for Maximum Focus", duration: "26:33", preview: false },
        { title: "Maintaining Peak Performance Long-term", duration: "21:55", preview: false },
      ]
    }
  ];

  const benefits = [
    "6h of videos - Step-by-step deep work strategies.",
    "Templates & Trackers – Stay on track effortlessly.",
    "Live Q&As – Expert guidance & accountability.",
    "Exclusive Community – Connect with others."
  ];

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
    <section id='curriculum' className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header Area */}
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center my-32"
        >
          <motion.div variants={fadeInUp}>
            <TitleBadge className="mb-8">
              <span className="text-white">Course Curriculum</span>
            </TitleBadge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="max-w-[900px] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Mastering Deep Work: A Structured Path to Peak Productivity
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column: Modules Accordion */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
            className="flex-1 w-full space-y-4"
          >
            {modules.map((module, mIdx) => (
              <motion.div
                key={mIdx}
                variants={fadeInUp}
                className={` rounded-3xl overflow-hidden transition-all duration-500 ${activeModule === mIdx ? 'bg-neutral-900/40 border-neutral-800' : 'bg-transparent'
                  }`}
              >

                {/* Module Header */}
                <button
                  onClick={() => setActiveModule(activeModule === mIdx ? null : mIdx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <h3 className="text-white text-xl md:text-2xl font-bold group-hover:text-primary-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-neutral-500 text-sm md:text-base font-medium">
                      {module.duration}
                    </p>
                  </div>
                  <div className={`text-white transition-transform duration-500 ${activeModule === mIdx ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Module Lessons (Accordion Content) */}
                <div className={`overflow-hidden transition-all duration-500 ${activeModule === mIdx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 md:p-8 pt-0 space-y-2 border-t border-neutral-800/50">
                    {module.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-800/50 transition-colors group cursor-pointer border border-transparent hover:border-neutral-800/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${lesson.preview ? 'bg-primary-500/20 text-primary-500' : 'bg-neutral-800 text-neutral-500 group-hover:bg-neutral-700'}`}>
                            <Image src={playButtonIcon} alt="Play" width={20} height={20} className={`w-full ${lesson.preview ? 'opacity-100' : 'opacity-40'}`} />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-neutral-300 font-medium md:text-lg">{lesson.title}</span>
                            {lesson.preview && (
                              <span className="px-3 py-0.5 rounded-full bg-primary-500/10 text-primary-500 text-[10px] font-bold tracking-wider uppercase">
                                Preview
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-neutral-500 font-mono text-sm">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Blue Glow Line below Navbar */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-80 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Benefits Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-[450px] mx-auto bg-neutral-600/40 border border-primary-300/50 rounded-[32px]  sticky top-24"
          >
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold ml-8 mt-10 leading-tight mb-16">
              Not only video lessons!
            </h3>

            <div className=" ">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center  group">
                  <div className="relative w-22 h-22">
                    <Image src={signIcon} alt="Check" fill sizes="48px" className="object-contain opacity-80 group-hover:opacity-100" />
                  </div>
                  <p className="text-neutral-400 text-sm">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

           
              <motion.div className='mx-auto w-2/3 my-10' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <EnrollButton className="py-2 w-full text-lg" />
              </motion.div>
            
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Curriculum;
