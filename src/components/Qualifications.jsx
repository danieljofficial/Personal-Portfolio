import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { skillsVariants } from '../motion/variants'
import { certifications, skills } from '../localdb/data'
import SkillCategory from './SkillCategory'



function Qualifications() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const mainControls = useAnimation()
  useEffect(() => {
      if( isInView ) {
          mainControls.start("visible")
          console.log(isInView)
      }
  }, [isInView])

  const distinctCategories = [...new Set(skills.map(skill => skill.category))]
 
  return (
    <div className="qualifications" id='qualifications'>
      <section className="technical-skills">
        <h2>Technical skills</h2>
        <div className="skills-grid">
          {distinctCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </section>

      <section className="certifications-section">
        <h2 className="certifications">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <h3>{cert.description}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
            </div>
          ))

          }
        </div>
      </section>
    </div>
  )
}

export default Qualifications