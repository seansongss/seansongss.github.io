import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion/dist/framer-motion';

import './Navbar.css';

const navVariants = {
  left: {
    x: '50vw',
    y: '50vh',
    opacity: 1,
  },
  right: {
    x: 500,
    opacity: 0,
  },
  logoAnimate: {
    x: 0,
    y: 0,
    transition: {
      duration: 2,
    }
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

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <motion.div
          variants={navVariants}
          initial='left'
          animate='logoAnimate'
        >
          <Link to='home' className='navbar-logo' spy={true} smooth={true} offset={-80} duration={800}>seansongss</Link>
        </motion.div>
        <motion.div
          className='navbar-links-container'
          variants={navVariants}
          initial='right'
          animate='animate'
        >
          <ul className='navbar-list'>
            <li>
              <Link to="home" spy={true} smooth={true} offset={-80} duration={800}>Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-80} duration={800}>About</Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-80} duration={800}>Projects</Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true} offset={-80} duration={800}>Experience</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={800}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}