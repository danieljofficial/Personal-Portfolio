import React, { useContext, useRef, useEffect } from 'react'
import { useState } from 'react'
import { TextAnimation } from '../motion/TextAnimation'
import { ThemeContexts } from '../contexts/ThemeContext'
import {HashLink as Link} from 'react-router-hash-link'
import { motion, useInView, useAnimation } from "framer-motion"
import { scrollVariants } from '../motion/variants'


function Navbar() {
    const {isLightTheme, setIsLightTheme} = useContext(ThemeContexts)
    const [showNavbar, setShowNavbar] = useState(false)
    const toggleNavbar = () => {
        setShowNavbar(prev => !prev)
    }
    const toggleTheme = () => {
        setIsLightTheme( (prevTheme) => {
            const newTheme = !prevTheme
            localStorage.setItem("theme", JSON.stringify(newTheme))
            return newTheme
        })       
          
    }

    


    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })

    const mainControls = useAnimation()
    useEffect(() => {
        if( isInView ) {
            mainControls.start("visible")
        }
    }, [isInView])

    let barRef = useRef(null)
    useEffect(() => {
        let closer = (e) => {
            if (barRef.current && !barRef.current.contains(e.target)) {
                setShowNavbar(false)
            }
            e.stopPropagation()
        }
        document.addEventListener("mousedown", closer)
        return () => {
            document.removeEventListener("mousedown", closer)
        }
    })


    return (
        <motion.nav 
            initial={{ y: "-250vh" }}
            animate={{ y: 0 }}
            transition={{ 
                when: "beforeChildren", 
                staggerChildren: 0.4,
                delay: 0.2, duration: 1, 
                type: "spring", 
                stiffness: "120"}}
            className='navbar'>
            <TextAnimation text = 'Daniel Jonathan' />

            <label style={{opacity: showNavbar ? 0 : 1 }} className="burger" htmlFor="burger">
                    <input onChange={toggleNavbar} checked={showNavbar} disabled={showNavbar} type="checkbox" id="burger" />
                    <span></span>
                    <span></span>
                    <span></span>
            </label>

            <div ref={barRef} className={showNavbar ? 'navSection' : 'navSection hide'} id="test">
                
                <div className="navText">  
                    <Link to="#about" smooth>
                        <span className="nav-about">About </span>
                    </Link>  
                    <Link to="#qualifications" smooth>
                        <span className="nav-qual">Qualifications </span>
                    </Link>  
                    <Link to="#projects" smooth>
                        <span className="nav-projects">Projects </span>
                    </Link>  
                    <Link to="#contact" smooth>
                        <span className="nav-contact">Contact </span>
                    </Link>  
                </div>  

                <div className="navIcons">

                


                <label htmlFor="theme" className='theme' id={showNavbar ? '' : 'hide'}>
                    <span className="theme__toggle-wrap">
                        <input onChange={toggleTheme} checked={!isLightTheme} id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
                        <span className="theme__fill"></span>
                        <span className="theme__icon">
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                            <span className="theme__icon-part"></span>
                        </span>
                    </span>
                </label>

                </div>

            </div>
        </motion.nav>
    )
}

export default Navbar

