import React, { useState } from 'react'
import '../style/header.css'
import { FaGithub,FaBars,FaTimes } from 'react-icons/fa'
import { VscMail } from 'react-icons/vsc'



function Header() {
    const[open,setOpen] = useState(false)
    return (
        <div className="header_main">
            <div className={open ? 'header_links_active' : "header_container"}>
                <div className="header_left">Ol11.</div>
                  <ul className= 'header_links'>
                      <li> <a href="#projectSection">Projects  </a> </li>
                      <li > <a href="https://github.com/Olzhas11Dev?tab=repositories" target="_blank" rel="noreferrer" >< FaGithub className='header_git'/> Github </a> </li>
                      <li> <a href="#contact"><VscMail className="header_mail"/></a> </li>
                  </ul>          
            </div>
            <div onClick={()=>setOpen(!open)} className="header_menu_icons" >
                {open ? <FaTimes className="icon_burger" /> : <FaBars className='icon_burger' />}
            </div>
        </div>
    )
}

export default Header
