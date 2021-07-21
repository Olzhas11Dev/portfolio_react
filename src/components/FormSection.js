import React,{ useState } from 'react'
import '../style/form.css'
import { AiOutlineLeftCircle,AiOutlineRightCircle } from 'react-icons/ai'
import dataTestim from '../dataTestim'

function FormSection() {
    const[index,setIndex] = useState(0)
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
