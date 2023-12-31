import React from 'react';
import { Link } from 'react-scroll';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='home' className='navbar-logo' spy={true} smooth={true} offset={-80} duration={800}>seansongss</Link>
        <div className='navbar-links-container'>
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
        </div>
      </div>
    </nav>
  )
}