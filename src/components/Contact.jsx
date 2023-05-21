import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import images from './../assets/mail.png';
import { motion } from 'framer-motion';
import { fadeIn } from './../variants';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_djyfh1h',
                'template_9rzhysq',
                form.current,
                'JCiNeqh9RfvQxqiMW'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log('success');
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <div>
                            <motion.h4
                                variants={fadeIn('right', 0.3)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.5 }}
                                className='text-[50px] text-accent 
                            font-medium mb-2 tracking-wider'
                            >
                                Get in touch!
                            </motion.h4>
                            <motion.h2
                                variants={fadeIn('left', 0.3)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.5 }}
                                className='text-[60px] lg:text-[90px] leading-none mb-12'
                            >
                                lets work <br />
                                Together!
                            </motion.h2>
                            <motion.img
                                src={images}
                                variants={fadeIn('right', 0.3)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.5 }}
                                className='hidden lg:flex lg:w-[300px] lg:h-[300px]'
                            />
                        </div>
                    </div>
                    <motion.form
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        ref={form}
                        onSubmit={sendEmail}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'
                    >
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all'
                            placeholder='Your email'
                            name='user_email'
                            type='email'
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all'
                            placeholder='Your name'
                            name='user_name'
                            type='text'
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full 
                            focus:border-accent transition-all resize-none mb-12'
                            name='message'
                            placeholder='Your message'
                        ></textarea>
                        <button
                            type='submit'
                            value='Send'
                            className='btn btn-lg'
                        >
                            Send message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
