import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className='navbar-list'>
            <Link to='/' className='navbar-logo'>seansongss</Link>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutme'>About Me</Link>
            </li>
            <li>
              <Link to='/hobbies'>Hobbies</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
