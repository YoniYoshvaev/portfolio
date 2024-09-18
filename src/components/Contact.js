import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [messageCount, setMessageCount] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedCount = localStorage.getItem('messageCount');
    if (storedCount) {
      setMessageCount(parseInt(storedCount));
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (messageCount >= 4) {
      setPopupMessage('You have reached the maximum number of messages allowed.');
      setShowPopup(true);
      return;
    }

    emailjs
      .sendForm('service_i6lswl7', 'template_m0tn13h', form.current, {
        publicKey: 'Ar1xAsAopk306zQol',
      })
      .then(
        () => {
          setMessageCount(messageCount + 1);
          localStorage.setItem('messageCount', messageCount + 1);
          setPopupMessage('Message sent successfully!');
          setShowPopup(true);
        },
        (error) => {
          setPopupMessage('Failed to send the message. Please try again later.');
          setShowPopup(true);
        },
      );
  };

  const closePopup = () => {
    setShowPopup(false);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='py-24 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            ref={form}
            onSubmit={sendEmail}>
            
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name="user_name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Email'
              name="user_email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name="message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>

            <button type="submit" className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>

      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center z-50">
              <p className="text-lg text-gray-700">{popupMessage}</p>
              <button
                onClick={closePopup}
                className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-80">
                OK
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
