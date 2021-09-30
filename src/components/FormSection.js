import React,{ useState } from 'react'
import '../style/form.css'
import { RiPhoneFill } from 'react-icons/ri'
import emailjs from 'emailjs-com'

function FormSection() {
   const[inputName,setInputName] = useState('')
   const[inputEmail,setInputEmail] = useState('')
   const[alert,setAlert] = useState(false)
    
    function sendEmail(e) {
        e.preventDefault();
        
        if(inputName===''){
            setAlert(true)  
        }   else{
            emailjs.sendForm('service_pzn7wdc', 'template_ifsnjpp', e.target, 'user_WH70CXSZ5QV6LLpZWldSV')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            setAlert(false)     
        }
        setInputName('')
        setInputEmail('')
      }


    return (
        <div id="contact" className='form_container'>
            <div className="form_left">
                <form  onSubmit={sendEmail}>
                    <h1>Contact me</h1>
                    <h2>I'd love to hear from you</h2>
                    <div className="form_name_email" >
                        <input style={{border:alert && '1px solid red' }}  onChange={(e)=>setInputName(e.target.value)} className='form_name' type="text" placeholder="Name"   name="name" value={inputName} />
                        <input  style={{border:alert && '1px solid red' }} onChange={(e)=>setInputEmail(e.target.value)}className='form_email' type="text" placeholder="Email" name="email" value={inputEmail}/>
                    </div>
                    <div className = 'form_subjectDIv' >
                        <input className='form_subject' type="text" placeholder="Subject" name="subject"/>   
                    </div>
                    <div className="form_textAreaDIv" >
                        <textarea  className='form_textArea' id="" cols="30" rows="10" placeholder="Description" spellCheck="false" name="description"></textarea>
                    </div>
                   
                    <input className="form_btn" type="submit" value="Send"/> 
                     
                </form>
            </div>
            <div className="form_right">
                <h1>Or just call me </h1>  
                <h2>Let's Talk</h2>
                    <div className="form_call_section">
                        <RiPhoneFill className='phone_icon' />
                        <div className="form_left_text">
                        Are you interested in collaboration? Just pick up the phone and call me.
                        </div>
                        <div className="phone_number">
                            +64 22 0809439
                        </div>
                    </div>
                   
            </div>
        </div>
    )
}

export default FormSection
