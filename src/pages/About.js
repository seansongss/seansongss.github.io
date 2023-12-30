import React from 'react';

import './About.css';

const About = () => {
  return (
    <div id='about' className='page'>
      <div className='profile-image'>
        <img src='/profile_image.jpg' alt='' />
      </div>
      <div className='text-container'>
        <h1>About Me</h1>
        <p>This is a page about me!</p>
      </div>
    </div>
  );
};

export default About;