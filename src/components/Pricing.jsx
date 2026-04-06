'use client';

import Image from 'next/image';
import signIcon from '../assets/icons/sign.png';
import EnrollButton from './Shared/EnrollButton';
import TitleBadge from './Shared/TitleBadge';
import { motion } from 'framer-motion';

const Pricing = () => {
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
        <div id='pricing' className='flex flex-col md:flex-row gap-6 justify-center max-w-7xl mx-auto mb-50 px-5 mt-32'>
            {/* left div  */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className=''
            >
                <div className="w-full min-h-[530px] lg:w-[750px] bg-neutral-600/40 border border-primary-300/50 rounded-[32px] flex flex-col justify-center px-10">
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                    >
                        <TitleBadge className={'w-40 top-5 text-white'}>Introduction</TitleBadge>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold m-5 leading-tight">
                            The Deep Work  Blueprint
                        </h1>
                    </motion.div>

                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                        className=" "
                    >
                        {benefits.slice(0, 2).map((benefit, i) => (
                            <motion.div key={i} variants={fadeInUp} className="flex items-center  group">
                                <Image src={signIcon} alt="Check" width={200} height={200} className="opacity-80 w-22 group-hover:opacity-100" style={{ height: 'auto' }} />
                                <p className="text-neutral-400 text-sm">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* right div  */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="w-full lg:w-[450px] bg-neutral-600/40 border border-primary-300/50 rounded-[32px] ">
                    <div className='flex justify-between items-center px-5 pt-10'>
                        <motion.h3 variants={fadeInUp} className="text-white text-2xl md:text-3xl lg:text-4xl font-bold m-5 leading-tight">
                            $349
                            <span className="text-neutral-400 text-xl relative ml-2">$500
                                <div className="w-14 h-px bg-red-500 absolute top-1/2 left-0 rotate-12"></div>
                            </span>
                        </motion.h3>
                        <motion.button variants={fadeInUp} className="bg-primary-500 text-white px-4 py-2 rounded-full">30% off</motion.button>
                    </div>
                    <motion.p variants={fadeInUp} className='ml-10 text-white text-sm'>30% off until 4d : 2h : 41m : 17s</motion.p>
                    
                    <motion.div 
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                        className=" mt-6"
                    >
                        {benefits.map((benefit, i) => (
                            <motion.div key={i} variants={fadeInUp} className="flex items-center  group">
                                <Image src={signIcon} alt="Check" width={200} height={200} className="opacity-80 w-22 group-hover:opacity-100" style={{ height: 'auto' }} />
                                <p className="text-neutral-400 text-sm">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex justify-center mb-5 mt-10">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <EnrollButton className="w-full px-12 py-3 text-lg" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Pricing