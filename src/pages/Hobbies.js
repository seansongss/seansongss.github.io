import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';


const Hobbies = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hobbies</h1>
      <p>Here's a list of my hobbies.</p>
    </motion.div>
  );
};

export default Hobbies;