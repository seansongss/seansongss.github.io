import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>seansongss</Link>
          <div className='navbar-links-container'>
            <ul className='navbar-list'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/experience'>Experience</Link></li>
              <li className='list-end'><Link to='/hobbies'>Hobbies</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}