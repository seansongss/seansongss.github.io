import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import TextareaAutosize from 'react-textarea-autosize';

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

  const ref = useRef()

  const isInView = useInView(ref, { margin: '-40%' })

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
        <motion.h1 variants={variants}>Leave a message to connect!</motion.h1>
      </motion.div>
      <motion.div className='contact-form-container' variants={variants}>
        <form>
          <input type='text' required placeholder='Name' />
          <input type='email' required placeholder='Email' />
          <TextareaAutosize
            className='text-area-box'
            style={{ boxSizing: 'border-box' }}
            minRows={8}
            maxRows={15}
            placeholder='Message'
          />
          <button>Submit</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;