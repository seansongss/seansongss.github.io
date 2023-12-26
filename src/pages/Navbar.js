import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/'>Home</Link>
                <Link to='/aboutme'>About Me</Link>
                <Link to='/hobbies'>Hobbies</Link>
            </div>
        </nav>
    </>
  )
}
