import React from 'react'
import { motion } from 'framer-motion'

const fadeSkillsVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: id * 0.2
      }
    })
  }

function Skill({ skill, icon: Icon, id }) {
    return (
    <motion.li
        variants={fadeSkillsVariants}
        initial="hidden"
        whileInView="animate"
        viewport={{
            once: true
        }}
        custom={id}
    >
        <Icon />
        {skill.technology}
    </motion.li>
)
}

export default Skill