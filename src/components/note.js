


import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { TbNetwork } from 'react-icons/tb';

const services = [
    {
        name: 'Backend Development',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Suscipit repellendus commodi exercitationem delectu vero inventore quaerat optio? Sequi possimus, inventore facere similique modi ut nulla doloremque non, id deleniti adipisci?',

        link: 'Link',
    },
    {
        name: 'Front-end Development',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Suscipit repellendus commodi exercitationem delectu vero inventore quaerat optio? Sequi possimus, inventore facere similique modi ut nulla doloremque non, id deleniti adipisci?',
        link: 'Link',
    },
    {
        name: 'Robotic Development',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Suscipit repellendus commodi exercitationem delectu vero inventore quaerat optio? Sequi possimus, inventore facere similique modi ut nulla doloremque non, id deleniti adipisci?',

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
                <h2 className='h2 font-secondary text-accent'>what i DO?</h2>
                <div className='flex flex-col lg:flex-row  lg:h-[500px] lg:gap-x-4'>
                    {services.map((service, index) => {
                        const { name, description, image, link } = service;
                        return (
                            <div
                                className='lg:rounded-lg  bg-black/5 lg:h-[250px] text-left mb-[38px] flex '
                                key={index}
                            >
                                <div className='max-w-[470px] lg:h-[100px]'>
                                    <h4 className=' tracking-wider text-[30px] font-bold mb-6'>
                                        {name}
                                    </h4>
                                    <p className='font-secondary leading-tight text-justify text-[16px]'>
                                        {description}
                                    </p>
                                </div>
                                <div className='flex flex-col flex-1 items-end'>
                                    <a href='#'>
                                        <BsArrowUpRight />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;





<form className='flex-1 shadow-lg bg-white/80 lg:rounded-xl'>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all'
                            placeholder='Your email'
                            type='email'
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all'
                            placeholder='Your name'
                            type='text'
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all'
                        ></textarea>
                    </form>
