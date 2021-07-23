import React from 'react'
import '../style/projects.css'
import dataProjects from '../dataProjects'
import ProjectsCard from './ProjectsCard'


function Projects() {

    return (
          <div id='projectSection' className='project_container' >
              { dataProjects.map(function(e,index){
                  return (
                          < ProjectsCard  id={e.id} key={index} img={e.img} title={e.projects_title} role={e.projects_role} />
                  )
              }) }
          </div>
    )
}

export default Projects
