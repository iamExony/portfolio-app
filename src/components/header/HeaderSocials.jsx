import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/eze-onyemaechi-046162187/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/iamExony/" target="_blank"><BsGithub/></a>
        <a href="https://www.pinterest.com/onye4holiness/_created/" target="_blank"><BsPinterest/></a>
        
    </div>
  )
}

export default HeaderSocials