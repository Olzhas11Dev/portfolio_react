import React,{ useState } from 'react'
import '../style/form.css'
import { AiOutlineLeftCircle,AiOutlineRightCircle } from 'react-icons/ai'
import dataTestim from '../dataTestim'
import emailjs from 'emailjs-com'

function FormSection() {
    const[index,setIndex] = useState(0)
    // const[wasSent,setWasSent] = useState(false)
   
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_pzn7wdc', 'template_ifsnjpp', e.target, 'user_WH70CXSZ5QV6LLpZWldSV')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (
        <div id="contact" className='form_container'>
            <div className="form_left">
                <form  onSubmit={sendEmail}>
                    <h1>Contact me</h1>
                    <h2>I'd love to hear from you</h2>
                    <div className="form_name_email" >
                        <input className='form_name' type="text" placeholder="Name"   name="name"/>
                        <input  className='form_email' type="text" placeholder="Email" name="email"/>
                    </div>
                    <div className = 'form_subjectDIv' >
                        <input className='form_subject' type="text" placeholder="Subject" name="subject"/>   
                    </div>
                    <div className="form_textAreaDIv" >
                        <textarea  className='form_textArea' id="" cols="30" rows="10" placeholder="Description" spellCheck="false" name="description"></textarea>
                    </div>
                    {/* {wasSent ? 'Email was sent' :
                        <input className="form_btn" type="submit" value="Send"/> 
                    } */}
                    <input className="form_btn" type="submit" value="Send"/> 
                     
                </form>
            </div>
            <div className="form_right">
            </div>
        </div>
    )
}

export default FormSection
