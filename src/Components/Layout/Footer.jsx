import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footerContainer">

        <div className="footerLogo">
          <img src={logo} alt="Nandini Medical Logo" />
          <p>Your Health, Our Priority</p>
        </div>

        <div className="quickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>

        <div className="footerContact">
          <h3>Contact Us</h3>
          <p>📞 +91 378427932</p>
          <p>📧 nandinimedical@gmail.com</p>
        </div>

      </div>

      <div className="footerBottom">
        <p>© 2025 Nandini Medical Hall. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer