import React from 'react';
//image
import avatar from '../assets/alim-pixar.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from './../variants';

const Banner = () => {
    return (
        <div
            className='min-h-[80vh] lg:min-h-[70vh] flex items-center'
            id='home'
        >
            <div className='container mx-auto lg:mt-auto lg:items-center'>
                <div className='flex flex-col gap-y-6 lg:flex-row'>
                    {/* test */}
                    <div className='flex-1 text-center lg:text-left font-secondary'>
                        <motion.h1
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='lg:mx-0 lg:text-[80px] text-[55px] lg:mb-4 font-bold'
                        >
                            Miftahul <span> Alim</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-4 text-[30px] lg:text-[48px] font-secondary font-semibold uppercase leading-[1]'
                        >
                            <span className='mr-1'>I am a</span>
                            <TypeAnimation
                                sequence={['Software', 2000, 'Robotic', 2000]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                            <span>Developer</span>
                        </motion.div>
                        <motion.p
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className=' text-[16px] text-left mb-8  lg:mb-2'
                        >
                            Hello my name is Miftahul Alim, I'm software and
                            robotic developer from Yogyakarta. i like to write
                            the code, read the books, watch some movies, and do
                            sport things like jogging or basketball. if you want
                            to collabs with me or do some bussiness you can
                            download my CV or contact me.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex max-w-max gap-x-2 mb-8 items-center lg:mx-0 mx-auto'
                        >
                            <button className='btn btn-lg '>Contact Me</button>
                            <a href='#' className='text-gradient btn-link ml-2'>
                                Download CV
                            </a>
                        </motion.div>

                        <div className='flex text-[20px] gap-x-4 max-w-max mx-auto lg:mx-0 lg:ml-8 lg:mt-[-20px]'>
                            <Link to='https://github.com/alimmiftahul'>
                                <FaGithub />
                            </Link>
                            <Link to='https://www.linkedin.com/in/miftahul-alim-4b7525173/'>
                                <FaLinkedin />
                            </Link>
                            <Link to='https://api.whatsapp.com/send?phone=6281340808454'>
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='hidden lg:flex mt-[-50px] lg:mt-[-70px] mr-4 '
                    >
                        <img
                            src={avatar}
                            alt=''
                            className='h-auto lg:max-w-[350px]  max-w-[320px] lg:ml-8'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
