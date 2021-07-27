import React from 'react'
import '../style/projectSection.css'
import dataProjects from '../dataProjects'
import ProjCard from './ProjCard'


function ProjectSection() {
   
    return (
        <div className='pics'>
         {dataProjects.map(function(e){
            return (
                <ProjCard id={e.id} title={e.projects_title} role={e.projects_role} img={e.img}/>
            )
            })}
        </div>  
    )
}

export default ProjectSection

   
