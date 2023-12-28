import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>
    </motion.div>
  );
};

export default Home;