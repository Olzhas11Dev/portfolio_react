import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Card(props) {

    useEffect(()=>{
        Aos.init({duration:1000})
    })
    
    return (
        <div>
            <div data-aos='fade-right' className="about_card">
                    <div className="about_skills">{props.skills}</div>
                    <div className="about_tools" >{props.tools}</div>
                    <div className="about_text" > {props.text}</div>
            </div>
        </div>
    )
}

export default Card
