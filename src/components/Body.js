import React from 'react'
import '../style/body.css'

function Body() {
    return (
        <div className="body_container" >
            <div className="body_left">
                <p className="body_dev">Developer</p>
                <h1 className="body_text" >
                    Let's build something great <br/> 
                    <span className='body_together'> TOGETHER</span> 
                </h1>
                <div className="body_enjoy"> "You can only become truly accomplished at something you love. 
                Don't make money your goal.  Instead pursue the things you love doing and then 
                do them so well that people can't take their eyes off of you." - Maya Angelou 
                </div>
            </div>
            <div className="body_right">
                <div className="body_dev_icon"><img src="./img/dev_icon.png" alt="#"/> </div>
            </div>
        </div>
    )
}

export default Body
