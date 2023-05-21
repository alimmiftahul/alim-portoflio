import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import images from './../assets/services.png';

const services = [
    {
        name: 'Backend Development',
        description:
            'I make server, database, And API with some Framework like Laravel, and Nodejs. do databasing with Mysql and NoSql (mongodb) ',
    },
    {
        name: 'Front-end Development',
        description:
            'I make UI with Figma, do the front-end with Reactjs, and for the CSS with Tailwind or Bootstrap4/5',
        link: 'Link',
    },
    {
        name: 'Robotic Development',
        description:
            'Make some Robotic instrumentation with PLC or with ROS (robotic operating system)',
        link: 'Link',
    },
];

const Services = () => {
    return (
        <section
            className='min-h-[100vh] lg:min-h-[100vh] flex items-center lg:mt-8'
            id='services'
        >
            <div className='container mx-auto lg:h-[80vh]'>
                <h2 className='h2 text-accent mb-6 text-center lg:text-left'>
                    What I Do ?
                </h2>
                <div className='flex flex-col lg:flex-row '>
                    <div className='flex-1'>
                        <div>
                            {services.map((service, index) => {
                                const { name, description, link } = service;
                                return (
                                    <motion.div
                                        variants={fadeIn('left', 0.3)}
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{ once: false, amount: 0.7 }}
                                        className='border-b border-black h-[150px] mb-[38px] flex '
                                        key={index}
                                    >
                                        <div className='max-w-[470px] lg:h-[100px]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                                {name}
                                            </h4>
                                            <p className='font-secondary leading-tight'>
                                                {description}
                                            </p>
                                        </div>
                                        <div className='flex flex-col flex-1 items-end'>
                                            <a
                                                href='#'
                                                className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                                            >
                                                <BsArrowUpRight />
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='hidden lg:flex mix-blend-lighten mb-8 lg:mb-4 lg:bg-[length:380px_380px] lg:min-w-[200px]'
                    >
                        <img src={images} alt='' />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
