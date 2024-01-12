import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';
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
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
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
        <motion.h1 variants={textVariants} >About Me</motion.h1>
        <motion.p variants={textVariants} >I am Sean Song, a Mathematics student at University of Waterloo</motion.p>
        <motion.p variants={textVariants} >Interests: Alpine Skiing, Soccer, Reading, Workout</motion.p>
        <motion.p variants={textVariants} >Interested Field: Machine Learning, Full-stack development, </motion.p>
        <motion.h2 variants={textVariants} >Programming Languages</motion.h2>
        <motion.p variants={textVariants} >Python, JavaScript, Java, C, SQL</motion.p>
        <motion.h2 variants={textVariants} >Data Tools/Libraries</motion.h2>
        <motion.p variants={textVariants} >ReactJS, React Native, Tensorflow, Firebase, Django, Selenium</motion.p>
        <FontAwesomeIcon className='socialIcon' icon={faInstagram} size='2x' onClick={() => { window.open('https://www.instagram.com/seansongss') }} />
        <FontAwesomeIcon className='socialIcon' icon={faGithub} size='2x' onClick={() => { window.open('https://www.github.com/seansongss') }} />
        <FontAwesomeIcon className='socialIcon' icon={faLinkedin} size='2x' onClick={() => { window.open('https://www.linkedin.com/in/seansongss/') }} />
      </motion.div>
      <div className='profile-image'>
        <img src='/profile_image.jpg' alt='' />
      </div>
    </div>
  );
};

export default About;