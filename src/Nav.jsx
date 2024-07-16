import React from 'react'

import './App.css'
import { Link } from 'react-router-dom'
function Nav() {
  return ( 
    <div>
        <nav>
        <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        {/* <a>Home </a> */}
        {/* <a>About  </a>
        <a>Contact </a> */}
        </nav>
    </div>
  )
}

export default Nav