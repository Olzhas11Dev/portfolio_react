import React from 'react'
import '../style/form.css'
import { AiOutlineLeftCircle,AiOutlineRightCircle } from 'react-icons/ai'

function Form() {
    return (
        <div className='form_container'>
            <div className="form_left">
                <h1>Contact me</h1>
                <h2>I'd love to hear from you</h2>
                <div className="form_name_email" >
                    <input  className='form_name' type="text" placeholder="Name" />
                    <input  className='form_email' type="text" placeholder="Email" />
                </div>
                <div className = 'form_subjectDIv' >
                    <input  className='form_subject' type="text" placeholder="Subject" />   
                </div>
                <div className="form_textAreaDIv" >
                    <textarea className='form_textArea' name="" id="" cols="30" rows="10" placeholder="Description" ></textarea>
                </div>
            </div>
            <div className="form_right">
                <h1 >Testimonials</h1>
                <h2>See what people are saying</h2>
                <div className="form_testim" >
                    <AiOutlineLeftCircle className="testim_left" />
                        <div className="form_test_content" >
                            <h1>Name</h1>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ex dolore doloremque ipsam modi 
                                molestias vitae, culpa ab vel corporis! Impedit velit unde, natus dolores ullam officia commodi
                                 necessitatibus aliquam!
                            </div>
                        </div>
                    <AiOutlineRightCircle className="testim_right" />
                </div>
            </div>
        </div>
    )
}

export default Form
