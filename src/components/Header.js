import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            {/* <img src={Logo} alt='' /> */}
          </a>

          <motion.a
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.10 }}
          href='#contact' className='btn btn-sm flex items-center justify-center'>
            Work with me
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
