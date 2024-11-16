import React from 'react'
import { data } from '../localdb/data'
import Card from './Card'

function Projects() {
  return (
    <div className='projects' id='projects'>
        <h2>Projects</h2>

        <div className="projectCards">
        {data.map((project, id) => {
           return (
                <Card 
                    projectName={project.projectName}
                    projectImg={project.projectUrl}
                    projectDesc={project.projectDesc}
                    projectLink={project.projectLink}
                    projectIcons={project.projectIcons}
                    key={id}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Projects