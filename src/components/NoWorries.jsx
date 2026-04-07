'use client';

import Image from 'next/image';
import TitleBadge from './Shared/TitleBadge';
import { motion } from 'framer-motion';

const NoWorries = () => {
  const images = ['https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411909/pexels-annushka-ahuja-8055837_dafvqs.png','https://res.cloudinary.com/dohsenfjm/image/upload/v1775411860/jozsef-hocza-hhASRAL_1io-unsplash_1_spnvhd.png']
  
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

  const avatarPop = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false },
    transition: { type: "spring", stiffness: 260, damping: 20 }
  };

  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Large Image (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:flex-1 relative aspect-4/4.5 rounded-3xl overflow-hidden border border-neutral-800/50"
          >
            <Image
              src={'https://res.cloudinary.com/dohsenfjm/image/upload/v1775412745/pexels-mizunokozuki-12903252_oipde0.png'}
              alt="Person concentrating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right Column: Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-[1.2] bg-neutral-800/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-neutral-800/50 relative overflow-hidden group"
          >
            
            {/* Header Area */}
            <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-6 mb-20 lg:mb-28">
              
              {/* Badge */}
              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: false }}>
                <TitleBadge className='w-32' >
                  <span className="text-white">No worries</span>
                </TitleBadge>
              </motion.div>

              {/* Social Proof (Avatar Stack) */}
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="flex flex-col items-start sm:items-end gap-3"
              >
                <div className="flex -space-x-3">
                  {images.map((avatar, i) => (
                    <motion.div 
                      key={i} 
                      variants={avatarPop}
                      className="relative w-8 h-8 rounded-full border-2 border-neutral-900 overflow-hidden shadow-lg"
                    >
                      <Image 
                      src={avatar} 
                      alt="Student" 
                      fill 
                      sizes="(max-width: 768px) 32px, 32px"
                      className="object-cover" />
                    </motion.div>
                  ))}
                </div>
                <motion.p variants={fadeInUp} className="text-neutral-100 text-xs md:text-sm font-medium">
                  Join with 5K other students
                </motion.p>
              </motion.div>

            </div>

            {/* Main Content Area */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 md:items-end justify-between">
              
              {/* Text Block */}
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="flex-1 space-y-6 lg:space-y-3 md:max-w-1/3"
              >
                <motion.h6 variants={fadeInUp} className="text-neutral-500  font-medium leading-relaxed max-w-[400px]">
                  The ability to concentrate deeply is the ultimate productivity hack
                </motion.h6>
                <motion.h4 variants={fadeInUp} className="text-white font-bold ">
                  And fortunately it’s a skill you can train & develop.
                </motion.h4>
              </motion.div>

              {/* Right Strip: Horizontal on Mobile, Vertical on Tablet/Desktop */}
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false }}
                variants={staggerContainer}
                className="w-full sm:w-auto flex flex-row sm:flex-col gap-3 md:gap-4 items-center"
              >
                {images.map((img, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="relative flex-1 sm:flex-none w-full sm:w-28 md:w-28 lg:w-36 aspect-square sm:aspect-4/5 rounded-xl md:rounded-2xl overflow-hidden border border-neutral-800/50 transition-all duration-500"
                  >
                    <Image src={img} alt="Focus visual" fill sizes="(max-width: 768px) 33vw, 150px" className="object-cover" />
                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Glowing background hint */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 blur-[100px] pointer-events-none"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default NoWorries;
