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
    <div id='projects' className='page'>
      <motion.div
        className='projects-container'
        variants={textVariants}
        initial='initial'
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.h1 variants={textVariants}>Projects</motion.h1>
        <motion.p variants={textVariants}>Over 5 years of programming experience, I have had wonderful experience to work with personal projects allowing me to develop and refine coding skills and algorithms.
          I am eager to provide impactful solutions to the community that bring positive impacts to the world.</motion.p>
        <motion.h2 variants={textVariants}>
          Drink It
          <img src='/Drink_it/drinkit_logo.png' alt='' />
        </motion.h2>
        <motion.div className='drinkit-container' variants={textVariants}>
          <motion.div className='drinkit-text-container' variants={textVariants}>
            <motion.p variants={textVariants}>A journal application that tracks and analyzes users' alcohol consumption, aimed at fostering healthy drinking habits</motion.p>
            <motion.p variants={textVariants}>Utilized Firebase for database connection and React Native to integrate various features such as recording and statistical analysis of alcohol consumption and providing alcohol recipes that are posted by users</motion.p>
          </motion.div>
          <motion.div variants={textVariants}><CardSlider /></motion.div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Projects