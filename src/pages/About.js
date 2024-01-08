import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';

import './About.css';

const About = () => {
  return (
    <div id='about' className='page'>
      <div className='text-container'>
        <h1>About Me</h1>
        <p>I am Sean Song, a Mathematics student at University of Waterloo</p>
        <p>Hobbies: Alpine Skiing, Soccer, Reading, Workout</p>
        <p>Interested Field: Machine Learning, Full-stack development</p>
        <h2>Programming Languages</h2>
        <p>Java, JavaScript, Python, </p>
        <h2>Data Tools/Libraries</h2>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </div>
      <div className='profile-image'>
        <img src='/profile_image.jpg' alt='' />
      </div>
    </div>
  );
};

export default About;