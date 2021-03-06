import React,{ useState } from 'react'
import '../style/form.css'
import { AiOutlineLeftCircle,AiOutlineRightCircle } from 'react-icons/ai'
import dataTestim from '../dataTestim'




function Form() {
    const[index,setIndex] = useState(1)
    
    const[element,setElement] = useState({
        firstName: dataTestim[0].firstName,
        familyName:dataTestim[0].familyName,
        comment: dataTestim[0].comment,
    })

    function next (){
        setIndex(index+1)
        if(index===dataTestim.length-1){
            setIndex(0)
        }
        dataTestim.map(function(e){
            if(index===e.id){
                setElement({
                    firstName:e.firstName,
                    familyName:e.familyName,
                    comment:e.comment
                }   
            )   
            }
        })      
    }

    function prev (){
        setIndex(index-1)
        if(index===0){
            setIndex(dataTestim.length-1)
        }
        dataTestim.map(function(e){
            if(index===e.id){
                setElement({
                    firstName:e.firstName,
                    familyName:e.familyName,
                    comment:e.comment
                }   
            )   
            }
        })      
    }




    console.log(index,element)
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
                          <h3>{element.firstName} </h3> 
                           <h3> {element.familyName}</h3>
                           <div>{element.comment}</div>
                        </div>
                    <AiOutlineRightCircle className="testim_right" onClick={next}/>
                </div>
            </div>
        </div>
    )
}

export default Form
