import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import emailjs from '@emailjs/browser';

import './Contact.css';

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChilden: 0.1,
    }
  }
}

const Contact = () => {

  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: '-40%' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l5ziz8e', 'template_xlybdsu', formRef.current, '9OVkBt9ohJRJaXGxv')
      .then((result) => {
        setSuccess(true);
      }, (error) => {
        setError(true);
      });
  };

  return (
    <motion.div
      id='contact'
      className='page'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='contact-text-container' variants={variants}>
        <motion.h1 variants={variants}>Send a message to connect</motion.h1>
        <motion.p variants={variants}>I am happy to chat about the world, feel free to reach out!</motion.p>
      </motion.div>
      <motion.div className='contact-form-container' variants={variants}>
        <motion.div
          className='mail-svg'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg width="30vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12.0001V10.0001H18V12.0001M3.02832 10.0002L10.2246 14.8168C10.8661 15.2444 11.1869 15.4583 11.5336 15.5414C11.8399 15.6148 12.1593 15.6148 12.4657 15.5414C12.8124 15.4583 13.1332 15.2444 13.7747 14.8168L20.9709 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.07989 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <input type='text' required placeholder='Name' name='name'/>
          <input type='email' required placeholder='Email' name='email'/>
          <TextareaAutosize
            className='text-area-box'
            style={{ boxSizing: 'border-box' }}
            minRows={8}
            maxRows={15}
            required
            placeholder='Message'
            name='message'
          />
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;