import React from 'react';

import './About.css';

const About = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>This is a page about me!</p>
      <p>I am Sean Song, a Mathematics student at University of Waterloo</p>
        <p>Hobbies: Alpine Skiing, Soccer, Reading, Workout</p>
        <p>Interested Field: Machine Learning, Full-stack development</p>
        <h2>Programming Languages</h2>
        <h2>Data Tools/Libraries</h2>
    </motion.div>
  );
};

export default About;