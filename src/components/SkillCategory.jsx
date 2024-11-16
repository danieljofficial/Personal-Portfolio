import React from 'react'
import Skill from './Skill'
import { skills } from '../localdb/data'



function SkillCategory({ category }) {
  return (
    <div className='skill-category'>
        <h3>{category}</h3>
        <ul>
            {
                skills.filter((skill) => category === skill.category).map((skill, index) => (
                    <Skill 
                        skill={skill} 
                        icon={skill.icon}
                        id={index}
                        key={index}
                    /> 
                ))
            }
        </ul>
        
    </div>
  )
}

export default SkillCategory