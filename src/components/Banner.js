import React from 'react';

import Image from '../assets/yoni4.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Cv from '../assets/cv-yoni-yoshvaev.pdf';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              YONI <span>YOSHVAEV</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              A passionate Full-Stack Mern Developer with expertise in both front-end and back-end, including React, TypeScript, Node.js, MongoDB, and more. I specialize in building intuitive, high-performance applications with a focus on clean, scalable code. My experience extends beyond development into design, bringing ideas to life with tools like Figma, Photoshop, and Premiere Pro. Whether it's creating innovative digital solutions or enhancing user experiences, I'm driven to deliver impactful results. Let’s build something amazing together!
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href='#contact' className='btn btn-sm flex items-center justify-center'>
                Contact me
              </a>
              <a href={Cv} className='text-gradient btn-link' download>
                My CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.facebook.com/yoniyoshvaev/'  target='_blank' rel='noopener noreferrer'>
                <FaFacebook />
              </a>
              <a href='https://www.instagram.com/yoniyoshvaev/'  target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/in/yoni-yoshvaev/'  target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
