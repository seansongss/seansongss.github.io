import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 100,
  },
  animate: {
    x: '-200%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
}

const Home = () => {
  return (
    <div id='home' className='page'>
      <motion.div className='text-container' variants={textVariants} initial='initial' animate='animate'>
        <motion.h1 variants={textVariants}>SEAN SONG</motion.h1>
        <motion.h2 variants={textVariants}>An enthusiatic university student</motion.h2>
        <motion.div variants={textVariants} animate='scrollButton' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faAnglesDown} size='2x' /></motion.div>
      </motion.div>
      <div className='slider-wrapper'>
        <motion.div className='slider-text-container' variants={sliderVariants} initial='initial' animate='animate' style={{ cursor: 'default'}}>Engineer Developer Reader Skier</motion.div>
      </div>
    </div>
  );
};

export default Home;