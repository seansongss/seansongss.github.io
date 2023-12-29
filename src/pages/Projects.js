import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';


function Projects() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Projects</h1>
      <p>This is a page Projects</p>
    </motion.div>
  )
}

export default Projects