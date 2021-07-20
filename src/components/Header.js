import React from 'react'
import '../style/header.css'
import { FiMail } from "react-icons/fi";
import { FaGithub } from 'react-icons/fa'
import { VscMail } from 'react-icons/vsc'



function Header() {
    return (
        <div className="header_main">
            <div className="header_container">
                <div className="header_left">Ol11.</div>
                  <ul className='header_links'>
                      <li>Home</li>
                      <li >< FaGithub className='header_git'/> Github </li>
                      <li><VscMail className="header_mail"/></li>
                  </ul>          
            </div>
        </div>
    )
}

export default Header
