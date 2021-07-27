import React,{useState} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function ProjCard(props) {
    const[showModal,setShowModal] = useState(false)
    const [path,setPath] = useState()

    function openPage (id){
        console.log(id)
        if(id===0){
            setPath('https://mystifying-nightingale-3e6063.netlify.app')
        } else if (id===1){
            setPath('https://ol11-weather.netlify.app')
        } else if (id===2){
            setPath('https://relaxed-ptolemy-b1d863.netlify.app')
        }
    }

    let Modal = 
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
               <a  target="_blank" rel="noreferrer" href={path}>  <button onClick={()=>openPage(props.id)} className="form_btn">Go to project  </button></a>
            </div>
            <AiOutlineCloseCircle onClick={()=>setShowModal(false)} className="project_close_btn" />
        </div>
    </div>

    return (

    <div  className ='pic_oneCard' >
     <img  className='pic_photo' src={props.img} alt=""/>
        <div onClick={()=>setShowModal(true)} className='pics_blockMask' >
            <div>{props.title}</div>
            <div>{props.role}</div>
        </div>
        {showModal ? Modal : null}
    </div>
    )
}

export default ProjCard
