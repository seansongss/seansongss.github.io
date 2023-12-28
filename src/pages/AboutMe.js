import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>This is a page about me!</p>
    </motion.div>
  );
};

export default AboutMe;