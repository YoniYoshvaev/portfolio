import React from 'react';
import Logo from '../assets/logo22.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            {/* <img src={Logo} alt='' /> */}
          </a>

          <a href='#contact' className='btn btn-sm flex items-center justify-center'>
            Work with me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
