import React from 'react';

//image
import image from './../assets/avatar.png';
import jslogo from './../assets/logo-javascript.svg';
import pylogo from './../assets/python-4.svg';
import cpplogo from './../assets/cpp.svg';
import phplogo from './../assets/php.svg';
import tslogo from './../assets/typescript.svg';

// count up
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import {} from 'react-icons/bs';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section
            className='min-h-[100vh] lg:min-h-[80vh] lg:mt-8 flex items-center'
            id='about'
            ref={ref}
        >
            <div className='container mx-auto '>
                <div className='flex flex-col gap-y-10 lg:gap-y-0  h-[70vh] lg:flex-row'>
                    {/*  */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='hidden lg:flex lg:mr-10 lg:ml-0 lg:w-[400px]'
                    >
                        <img
                            src={image}
                            alt=''
                            className='lg:me-auto  mt-[-40px] lg:w-auto '
                        />
                    </motion.div>
                    <div className='lg:w-[700px] text-center  lg:gap-y-0 lg:text-left'>
                        <motion.h2
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className='h2 text-accent lg:text-[40px] font-bold'
                        >
                            About Me.
                        </motion.h2>
                        <motion.h3
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className='h3 mb-4 lg:text-[30px] font-secondary'
                        >
                            software developer, who loves write code
                        </motion.h3>
                        <motion.p
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[16px]  font-secondary text-left '
                        >
                            I was born in central borneo regency, south barito
                            distrct at 8th july 2000. I start my software
                            developer journey in collage, from join robotic
                            team. i do love programming language such a
                            Javascript, Typescript, C++, Python, and PHP.for
                            backend programming i usually use sql, no-sql, with
                            php or nodejs. and for the front end I usually use
                            react with tailwind or bootstrap for css.
                        </motion.p>
                        <motion.h3
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className='h3 lg:font-secondary lg:text-[30px] lg:font-bold lg:text-left text-accent'
                        >
                            Skill
                        </motion.h3>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className='flex mx-10 gap-x-6 lg:gap-x-6 mb-12 items-center text-center'
                        >
                            <div className='text-center'>
                                <div className='text-[40px] mx-auto font-tertiary text-gradient mb-2'>
                                    <img
                                        src={jslogo}
                                        alt=''
                                        className='lg:w-[50px] lg:mx-auto'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] mx-auto font-tertiary text-gradient mb-2'>
                                    <img
                                        src={cpplogo}
                                        alt=''
                                        className='lg:w-[50px] lg:mx-auto'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] mx-auto font-tertiary text-gradient mb-2'>
                                    <img
                                        src={pylogo}
                                        alt=''
                                        className='lg:w-[50px] lg:mx-auto'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] mx-auto font-tertiary text-gradient mb-2'>
                                    <img
                                        src={tslogo}
                                        alt=''
                                        className='lg:w-[50px] lg:mx-auto'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] mx-auto font-tertiary text-gradient mb-2'>
                                    <img
                                        src={phplogo}
                                        alt=''
                                        className='lg:w-[50px] lg:mx-auto'
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
