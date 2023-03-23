import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EXONY</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/onyemaechi.anthony.750" target='_blank' rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://linkedin.com/in/eze-onyemaechi-046162187/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
        <a href="https://twitter.com/EzeOnyemaechi51" target='_blank' rel="noopener noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EXONY. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer