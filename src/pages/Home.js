import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


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
      duration: 2,
      staggerChildren: 0.1,
      delay: 4,
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
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4,
    },
  },
  initial: {
    x: 100,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
      delay: 5.5,
    },
  },
}

const Home = ({ isVisible }) => {
  return (
    <div id='home' className='page'>
      <motion.div className='slider-wrapper' variants={sliderVariants} initial='hidden' animate='show'>
        <motion.div className='slider-text-container' variants={sliderVariants} initial='initial' animate='animate'>Engineer Developer Reader Skier</motion.div>
      </motion.div>
      <motion.div className='home-text-wrapper' variants={textVariants} initial='initial' animate='animate'>
        <motion.div className='home-text-container' variants={textVariants}>
          <motion.h1 variants={textVariants}>SEAN SONG</motion.h1>
          <motion.h2 variants={textVariants}>An enthusiatic university student</motion.h2>
          <motion.div className='scrollButton' variants={textVariants} animate='scrollButton'>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={800}>
              <FontAwesomeIcon icon={faAnglesDown} size='2x' />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;