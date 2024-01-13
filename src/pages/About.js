import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';

import LanguageLogo from '../components/LanguageLogo';
import ToolLogo from '../components/ToolLogo';

import './About.css';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  imageAnimate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      staggerChildren: 0.1,
    },
  }
}

const About = () => {

  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <div id='about' className='page'>
      <motion.div
        className='text-container'
        variants={textVariants}
        initial='initial'
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.h1 variants={textVariants} >About me</motion.h1>
        <motion.div variants={textVariants} className='info-container'>
          <motion.div className='profile-image'>
            <img src='/profile_image.jpg' alt='' />
          </motion.div>
          <motion.div className='text-row'>
            <motion.div className='introText'>Hello! My name is <div className='name'>Sean Song</div>, a Mathematics student at the University of Waterloo</motion.div>
            <motion.p className='hobbies' >
              <br /><FontAwesomeIcon className='hobbies-image' icon={faPersonSkiing} size='1x' />Hobbies: Reading, Alpine Skiing, Soccer, Workout, Travelling
            </motion.p>
            <motion.p className='interest-field' >
              <img className='coding-image' src='coding-50.png' alt='' />Fields of Interest: Machine Learning &#40;ML&#41;, Artificial Intelligence &#40;ML&#41;, Full-stack development, Front-end Development, Quality Assurance, Quantitative Analysis
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.h2 variants={textVariants} >Programming Languages</motion.h2>
        <LanguageLogo />
        <motion.h2 variants={textVariants} >Data Tools/Libraries</motion.h2>
        <ToolLogo />
      </motion.div>
    </div>
  );
};

export default About;