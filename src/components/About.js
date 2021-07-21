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
                <p>My main area of interest is<span> FRONT END</span></p>
                <p className="about_longText" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorem harum minus recusandae iste explicabo adipisci accusamus id inventore! 
                    iste explicabo adipisci accusamus id inventore! Dolorem harum minus recusandae 
                    Dolorem harum minus recusandae iste explicabo adipisci accusamus id inventore! 
                    iste explicabo adipisci accusamus id inventore! Dolorem harum minus recusandae 
                </p>
            </div>
        </div>
    )
}

export default About
