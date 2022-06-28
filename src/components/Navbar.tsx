import React from 'react'
import './navbar.scss'
import { AiOutlinePoweroff } from 'react-icons/ai'
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="menubar">
     <Link  className="btn btn-sm btn-outline-danger btn-link" to ="/">
    <AiOutlinePoweroff />
    <span className="btn-text">
    Sign out
    </span>
    </Link>

<div >
  <img className="nav-logo" src={logo} alt="ubalogo"/>
</div>
    </div>
  )
}

export default Navbar