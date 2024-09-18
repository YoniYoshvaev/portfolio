import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import Img1 from '../assets/wix-img.png';
import Img2 from '../assets/ai-website-img.png';
import Img3 from '../assets/figma-img.png';
import Img4 from '../assets/mern-crypto.png';

import Video1 from '../assets/crmasters-website.mov'; 
import Video2 from '../assets/tel-aviv-website.mov';
import Video3 from '../assets/figma-video.mov'; 
import Video4 from '../assets/mern-crypto-video.mp4'; 

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest
                <br />
                Work
              </h2>
              {/* <button className='btn btn-sm'>View all projects</button> */}
            </div>

            {/* Project 1 */}
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'
              onClick={() => handleVideoClick(Video4)} 
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img4}
                alt='Project 1'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Crypto Investment Platform + Admin </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>MERN Stack</span>
              </div>
            </div>
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'
              onClick={() => handleVideoClick(Video1)} >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt='Project 1'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>WIX Website</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>CRMasters</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'
              onClick={() => handleVideoClick(Video2)} 
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt='Project 2'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>AI WEBSITE</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>tel-aviv.live</span>
              </div>
            </div>

            <div
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'
              onClick={() => handleVideoClick(Video3)} 
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt='Project 3'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Crypto Investment Platform</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Figma Project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {selectedVideo && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80'>
          <div className='relative w-3/4 max-w-3xl'>
            <button
              className='absolute top-2 right-2 text-black text-3xl z-60'
              onClick={handleCloseVideo}
              style={{ zIndex: 60 }} 
            >
              &times;
            </button>
            <video className='w-full' controls autoPlay>
              <source src={selectedVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
