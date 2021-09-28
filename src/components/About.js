import React from 'react'
import '../style/about.css'
import Card from './Card'
import dataSkills from '../dataSkills'


function About() {
    return (
        <div className="about_container">
            <div className="about_left">
                {dataSkills.map(function(e,index){
                    return (
                        <Card key={index} skills = {e.skills} tools={e.tools} text={e.text} />
                    )
                })}     

            </div>
            <div className="about_right">
                <div className="about_about">ABOUT ME</div>    
                <h1>Hi there! I'm Olzhas </h1>         
                <p className='about_interest' >My main area of interest is<span> DEVELOPMENT</span></p>
                <p className="about_longText" >I describe myself as a passionate developer who loves coding, open source, and the web platform.
                Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, 
                grow as a developer and support other open source projects.
                </p>
            </div>
        </div>
    )
}

export default About
