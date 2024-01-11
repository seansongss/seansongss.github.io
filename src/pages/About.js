import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const About = () => {
  return (
    <div id='about' className='page'>
      <motion.div className='text-container'  >
        <motion.h1 variants={textVariants} initial='initial' whileInView='animate'>About Me</motion.h1>
        <motion.p variants={textVariants} initial='initial' whileInView='animate'>I am Sean Song, a Mathematics student at University of Waterloo</motion.p>
        <motion.p variants={textVariants} initial='initial' whileInView='animate'>Interests: Alpine Skiing, Soccer, Reading, Workout</motion.p>
        <motion.p variants={textVariants} initial='initial' whileInView='animate'>Interested Field: Machine Learning, Full-stack development, </motion.p>
        <motion.h2 variants={textVariants} initial='initial' whileInView='animate'>Programming Languages</motion.h2>
        <motion.p variants={textVariants} initial='initial' whileInView='animate'>Java, JavaScript, Python, </motion.p>
        <motion.h2 variants={textVariants} initial='initial' whileInView='animate'>Data Tools/Libraries</motion.h2>
        <FontAwesomeIcon icon={faInstagram} size='2x' onClick={() => { window.open('https://www.instagram.com/seansongss') }} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faGithub} size='2x' onClick={() => { window.open('https://www.github.com/seansongss') }} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faLinkedin} size='2x' onClick={() => { window.open('https://www.linkedin.com/in/seansongss/') }} style={{ cursor: 'pointer' }} />
      </motion.div>
      <div className='profile-image'>
        <img src='/profile_image.jpg' alt='' />
      </div>
    </div>
  );
};

export default About;