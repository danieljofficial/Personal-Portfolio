import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { scrollVariants as aboutVariants } from '../motion/variants'

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    const mainControls = useAnimation()
    useEffect(() => {
        if( isInView ) {
            mainControls.start("visible")
        }
    }, [isInView])
    
    return (
        <motion.div 
            className='about' 
            id='about'
        >
            <motion.div 
                className="aboutText"
                ref={ref}
                variants={aboutVariants}
                initial="hidden"
                animate={mainControls}
            >
                <h1>Hi, my name is <b>Daniel Jonathan.</b> </h1>
                <p>
                    A <b>fullstack software developer</b> with 2 years of experience in building 
                    responsive and scalable web applications using React, Node.js, TypeScript, 
                    MongoDB, and CSS. An individual passionate about delivering high-quality, user-centered
                     software that meets business needs and stays updated with the latest web technologies.
                </p>
            </motion.div>
            <motion.div
                variants={aboutVariants}
                initial="hidden"
                animate="visible"
            >
                <img src="../public/portrait.png" className='portrait' alt="" />
            </motion.div>
            
        </motion.div>
    )
}

export default About