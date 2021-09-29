import React,{useState} from 'react'
import projectsDb from '../db/projectsDb'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import '../style/work_list.css'


function WorkList() {

    const[workModal,setWorkModal] = useState(false)
    const[dataProj,setDataProj] = useState()

    const handleModal = (event,data)=>{
        event.preventDefault()
        setWorkModal(true)
        setDataProj(data)
    }
    
    return (

        <div className='work_list_main' >
            <div className="work_list_row">
                {projectsDb.map((e)=>{
                    return (
                        <div onClick={(event,)=>handleModal(event,e)} key={e.id} className='work_card_item' >
                            <img src={e.img} alt=""/>
                            <div className="work_mask">
                                <div className="work_title">
                                    {e.projects_title}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        {workModal ?  
             <div className="work_list_modal">
                 <div className="work_modal_container">
                     <div className="work_pic">
                         <img src={dataProj.img} alt=""/>
                     </div>
                     <div className="work_list_right">
                        <div className="work_list_title">
                            {dataProj.projects_title}
                        </div>
                        <div className="work_list_description">
                            {dataProj.description}
                        </div>
                        <div className="work_list_tech">
                            {dataProj.technology}
                        </div>
                           <a target='blank' href={dataProj.path}><div className='work_list_link' >Go to ...</div></a>
                     </div>
                     <AiOutlineCloseCircle className='work_icon_close' onClick={(e)=>setWorkModal(false)} />
                     
                 </div>
                
             </div>
           :null
        }
        </div>
    )
}

export default WorkList
