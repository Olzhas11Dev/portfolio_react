import React from 'react'
import '../style/projectSection.css'
import dataProjects from '../dataProjects'
import ProjCard from './ProjCard'


function ProjectSection() {
   
    return (
        <div id="projectSection" className='pics'>
         {dataProjects.map(function(e,index){
            return (
                <ProjCard id={e.id} title={e.projects_title} role={e.projects_role} img={e.img} key={index} />
            )
            })}
        </div>  
    )
}

export default ProjectSection

   
