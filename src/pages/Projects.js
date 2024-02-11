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
  const refProject = useRef()
  const refProject2 = useRef()

  const isInView = useInView(ref, { margin: '-100px' })
  const isInViewProject = useInView(refProject, { margin: '-49%' })
  const isInViewProject2 = useInView(refProject2, { margin: '-30%' })

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
          <br /><br />
          Scroll down to see some projects that I strived to solve some societal problems.</motion.p>
      </motion.div>
      <motion.div
        className='project-container'
        variants={textVariants}
        initial='initial'
        ref={refProject}
        animate={isInViewProject && 'animate'}
      >
        <motion.h2 variants={textVariants}>
          Drink It
          <img src='/Drink_it/drinkit_logo.png' alt='' />
        </motion.h2>
        <motion.div className='drinkit-wrapper' variants={textVariants}>
          <motion.div className='drinkit-text-container' variants={textVariants}>
            <motion.p variants={textVariants}>A journal application that tracks and analyzes users' alcohol consumption, aimed at fostering healthy drinking habits.</motion.p>
            <motion.p variants={textVariants}>Utilized Firebase for database connection and React Native to integrate various features such as recording and statistical analysis of alcohol consumption and providing alcohol recipes that are posted by users.</motion.p>
            <motion.p variants={textVariants}>Developed reusable React components, such as monthly dashboard, authentication, custom calendar, journal record, etc.</motion.p>
            <motion.p variants={textVariants}>Currently under development, expected to launch on Google Play Store and App Store in March.</motion.p>
          </motion.div>
          <motion.div variants={textVariants}><CardSlider /></motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className='project-container'
        variants={textVariants}
        initial='initial'
        ref={refProject2}
        animate={isInViewProject2 && 'animate'}
      >
        <motion.h2 variants={textVariants}>
          AutoInsta
        </motion.h2>
        <motion.div className='autoinsta-wrapper' variants={textVariants}>
          <motion.div className='autoinsta-text-container' variants={textVariants}>
            <motion.p variants={textVariants}>Implemented an automation program through Selenium and Python to increase the user popularity by automating pressing Instagram likes and analyzing and tracking the list of followers and followings.</motion.p>
            <motion.p variants={textVariants}>With the analysis of the Instagram website using developer tools, the user can set a hashtag of their interest then the program goes through all the posts within the set hashtag and presses likes and follows accounts.
              <br /><br />
              Then, the program goes through all the list of followers and unfollows all the unfollowed back accounts leaving the only active accounts with similar interest, ultimately enhancing the account's popularity by increasing number of followers and likes.</motion.p>
            <motion.p variants={textVariants}>Increased test account's followers and likes by 300+ and 1000+ respectively, in less than a week.</motion.p>
          </motion.div>
          <motion.div className='autoinsta-image-container' variants={textVariants}>
            <img className='autoinsta-image' src='instagram-desktop.png' alt='' />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects