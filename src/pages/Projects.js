import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion/dist/framer-motion';

import CardSlider from '../components/CardSlider';

import './Projects.css';

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

function Projects() {

  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <div id='projects' className='page projects-container'>
      <motion.div
        className='project-intro-container'
        variants={textVariants}
        initial='initial'
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.h1 variants={textVariants}>Projects</motion.h1>
        <motion.p variants={textVariants}>With over 7 years of dedicated programming experience, I have had the enriching opportunity to immerse myself in various personal projects.
          These experiences have not only honed my coding skills but also deepened my understanding of complex algorithms.

          <br /><br />
          I am deeply passionate about leveraging my coding expertise to create innovative solutions that address community needs and have a lasting positive impact on the world.
          My goal is to develop software that not only meets technical expectations but also contributes meaningfully to societal advancement.
          Following are some projects that I strived to solve some societal problems.</motion.p>
      </motion.div>
      <motion.div
        className='project-container'
        variants={textVariants}
        initial='initial'
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.h2 variants={textVariants}>
          Drink It
          <img src='/Drink_it/drinkit_logo.png' alt='' />
        </motion.h2>
        <motion.div className='drinkit-wrapper' variants={textVariants}>
          <motion.div className='drinkit-text-container' variants={textVariants}>
            <motion.p variants={textVariants}>A journal application that tracks and analyzes users' alcohol consumption, aimed at fostering healthy drinking habits.</motion.p>
            <motion.p variants={textVariants}>Utilized Firebase for database connection and React Native to integrate various features such as recording and statistical analysis of alcohol consumption and providing alcohol recipes that are posted by users</motion.p>
            <motion.p variants={textVariants}>Developed reusable React components, such as monthly dashboard, authentication, custom calendar, and journal record.</motion.p>
            <motion.p variants={textVariants}>Currently under development, expected to launch on Google Play Store and App Store in February.</motion.p>
          </motion.div>
          <motion.div variants={textVariants}><CardSlider /></motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className='project-container'
        variants={textVariants}
        initial='initial'
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.h2 variants={textVariants}>
          AutoInsta
        </motion.h2>
        <motion.div className='drinkit-wrapper' variants={textVariants}>
          <motion.div className='drinkit-text-container' variants={textVariants}>
            <motion.p variants={textVariants}>A journal application that tracks and analyzes users' alcohol consumption, aimed at fostering healthy drinking habits.</motion.p>
            <motion.p variants={textVariants}>Utilized Firebase for database connection and React Native to integrate various features such as recording and statistical analysis of alcohol consumption and providing alcohol recipes that are posted by users</motion.p>
            <motion.p variants={textVariants}>Developed reusable React components, such as monthly dashboard, authentication, custom calendar, and journal record.</motion.p>
            <motion.p variants={textVariants}>Currently under development, expected to launch on Google Play Store and App Store in February.</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects