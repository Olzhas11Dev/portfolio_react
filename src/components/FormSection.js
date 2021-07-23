import React,{ useState } from 'react'
import '../style/form.css'
import { AiOutlineLeftCircle,AiOutlineRightCircle } from 'react-icons/ai'
import dataTestim from '../dataTestim'
import emailjs from 'emailjs-com'

function FormSection() {
    const[index,setIndex] = useState(0)
   
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

    function next (){
      setIndex(index+1)
      if(index===dataTestim.length-1){
          setIndex(0)
      }
    }
    
    function prev (){
        setIndex(index-1)
        if(index===0){
            setIndex(dataTestim.length-1)
    }
}
    return (
        <div id="contact" className='form_container'>
            <div className="form_left">
                <form autocomplete="off" onSubmit={sendEmail}>
                    <h1>Contact me</h1>
                    <h2>I'd love to hear from you</h2>
                    <div className="form_name_email" >
                        <input  autocomplete="off" className='form_name' type="text" placeholder="Name"   name="name"/>
                        <input  autocomplete="off"  className='form_email' type="text" placeholder="Email" name="email"/>
                    </div>
                    <div className = 'form_subjectDIv' >
                        <input autocomplete="off" className='form_subject' type="text" placeholder="Subject" name="subject"/>   
                    </div>
                    <div className="form_textAreaDIv" >
                        <textarea  autocomplete="off" className='form_textArea' id="" cols="30" rows="10" placeholder="Description" spellCheck="false" name="description"></textarea>
                    </div>
                     <input className="form_btn" type="submit" value="Send"/> 
                </form>
            </div>
            <div className="form_right">
                <h1 >Testimonials</h1>
                <h2>See what people are saying</h2>
                <div className="form_testim" >
                    <AiOutlineLeftCircle className="testim_left" onClick={prev} />
                        <div className="form_test_content" >
                            <div className='test_photo'>
                                <img src={dataTestim[index].img} alt=""/>
                            </div>
                            <div className='test_info_blog' >
                                <div className='test_comment' >{dataTestim[index].comment}</div>
                                <div>
                                <h3 className="test_name">{dataTestim[index].firstName} {dataTestim[index].familyName}</h3> 
                                <h3 > {dataTestim[index].company}</h3>
                                </div>  
                           </div>
                         
                        </div>
                    <AiOutlineRightCircle className="testim_right" onClick={next}/>
                </div>
            </div>
        </div>
    )
}

export default FormSection
