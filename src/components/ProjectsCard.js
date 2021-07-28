import React,{ useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// import '../style/projects.css'

function ProjectsCard(props) {
    const[modal,setModal] = useState(false)
   const [urlPath,setUrlPath] = useState('')

    let modalBlock = 
    <div className="project_modal" > 
        <div className="project_modal_container">
            <img className='project_modal_img' src={props.img} alt=""/>
            <div className='modal_description'>
                <h1 className="modal_title" >{props.title}</h1>
                <div className="modal_text" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                A rerum ducimus nihil quibusdam, sapiente asperiores iure 
                omnis ad quis sequi repudiandae recusandae exercitationem 
                sunt tempore quidem accusamus laborum, similique sit?
                </div>
               <a  target="_blank" rel="noreferrer" href={urlPath}> 
               <button onClick={()=>openPage(props.id)} className="form_btn">Go to project  </button></a>
            </div>
            <AiOutlineCloseCircle onClick={()=>setModal(false)} className="project_close_btn" />
        </div>
    </div>

    function openPage (id){
        if(id===0){
            setUrlPath("https://ol-dino-11.netlify.app")
        } else if (id===1){
            setUrlPath('https://ol11-weather.netlify.app')
        } else if (id===2){
            setUrlPath('https://ol-employee-list.netlify.app')
        }
       
    }

    function makeDec (){
        console.log( ' you clicked ' + props.title  )
        setModal(true)
    }

    console.log(path)
    return (
        <div   className="projects_card">    
            <div onClick={()=>makeDec(props.id)} >         
            <img className="projects_photo" src={props.img} alt=""/>
            <div className='projects_content'>
                <div className="projects_title">{props.title}</div>
                <div className="projects_role">{props.role}</div>
            </div>
            </div>
            {modal ? modalBlock : null}
        </div>
    )
}

export default ProjectsCard

