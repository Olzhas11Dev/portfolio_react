import React from 'react'

function Card(props) {
    return (
        <div>
            <div className="about_card">
                    <div className="about_skills">{props.skills}</div>
                    <div className="about_tools" >{props.tools}</div>
                    <div className="about_text" > {props.text}</div>
            </div>
        </div>
    )
}

export default Card
