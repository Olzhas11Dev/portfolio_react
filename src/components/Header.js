import React from 'react'
import '../style/header.css'
import { FaGithub } from 'react-icons/fa'
import { VscMail } from 'react-icons/vsc'



function Header() {
    return (
        <div className="header_main">
            <div className="header_container">
                <div className="header_left">Ol11.</div>
                  <ul className='header_links'>
                      <li> <a href="#projectSection">Projects  </a> </li>
                      <li > <a href="https://github.com/Olzhas11Dev?tab=repositories" target="_blank" rel="noreferrer" >< FaGithub className='header_git'/> Github </a> </li>
                      <li> <a href="#contact"><VscMail className="header_mail"/></a> </li>
                  </ul>          
            </div>
        </div>
    )
}

export default Header
