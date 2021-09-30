import React, { useState} from 'react'
import '../style/header.css'
import { FaGithub,FaBars,FaTimes } from 'react-icons/fa'
import { VscMail } from 'react-icons/vsc'

function Header() {
   
    const[open,setOpen] = useState(false)

    function popup (){
        if( window.innerWidth <= 800 ){
            setOpen(false)
        } 
    } 

    function listenScrollEvent(){
        if (window.scrollY > 400) {
            setOpen(false)
        }
    }

    window.addEventListener('resize',popup)
    window.addEventListener('scroll',listenScrollEvent)

    return (
        <div id="toUp" className="header_main">
            <div className={open ? 'header_links_active' : "header_container"}>
                <div className="header_left">Ol11.</div>
                  <ul className= 'header_links'>
                      <li> <a href="#projectSection">Projects  </a> </li>
                      <li > <a href="https://github.com/Olzhas11Dev?tab=repositories" target="_blank" rel="noreferrer" >< FaGithub className='header_git'/> Github </a> </li>
                      <li  > <a className='header_contact' href="#contact"><VscMail className="header_mail"/> Contact</a> </li>
                  </ul>          
            </div>
            <div onClick={()=>setOpen(!open)} className="header_menu_icons" >
                <a id='linkUp' href="#toUp">
                {open ? <FaTimes className="icon_burger" /> : <FaBars className='icon_burger' />}
                </a>
            </div>
        </div>
    )
}

export default Header
