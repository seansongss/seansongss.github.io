import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <FontAwesomeIcon icon={faInstagram} size='2x' onClick={() => { window.open('https://www.instagram.com/seansongss') }} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faGithub} size='2x' onClick={() => { window.open('https://www.github.com/seansongss') }} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faLinkedin} size='2x' onClick={() => { window.open('https://www.linkedin.com/in/seansongss/') }} style={{ cursor: 'pointer' }} />
      </div>
      <div className='profile-image'>
        <img src='/profile_image.jpg' alt='' />
      </div>
    </div>
  );
};

export default About;