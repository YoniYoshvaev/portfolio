import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="fixed bottom-20 right-4 z-50">

      <a
        href="https://wa.me/+972525845067" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          size="4x"  
          className="text-green-500 hover:text-green-600 transition-colors duration-300"
        />
      </a>
      </div>

 
    </div>
  );
};

export default App;
