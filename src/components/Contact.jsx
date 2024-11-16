import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter, FaCloudDownloadAlt} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255" ,
        boxShadow: "0px 0px 8px rgb(255, 255, 255",
        transition: {
          duration: 0.6,
          repeat: Infinity, 
          repeatType: "reverse" 
        }
    }
}

function Contact () {
    const iconStyles = {
        width: '3rem',
        height: '3rem',
    }
    
    const resumeUrl = "https://personal-portfolio-one-lake-29.vercel.app//Daniel_resume.pdf"
    const downloadResume = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURL = window.URL.createObjectURL(new Blob([blob])) 
                const resumeName = url.split("/").pop()
                const aTag = document.createElement("a")
                aTag.href = blobURL
                aTag.setAttribute("download", resumeName) 
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })
        

    }

    const currentYear = new Date().getFullYear()
    return (
        <div className="contact">
            <form onSubmit={e => e.preventDefault()} className="contact" id='contact'>
                <label htmlFor="name">
                    Name <br />
                    <input type="text" />
                </label>

                <label htmlFor="email">
                    Email <br />
                    <input type="email" />
                </label>

                <label htmlFor="name">
                    Message <br />
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </label>

                <button>Say hello</button>

                
            </form>

            <div className="footerWave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
            </div>

            <footer>

                

                <b>Interested in working together? Reach me through...</b>
                <div className="contactIcons">
                    
                    <a href="https://x.com/__Daniel_______" target='_blank'>
                        <FaTwitter  style={iconStyles}/> 
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-jonathan-95a935230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                        <FaLinkedin style={iconStyles} />
                    </a>
                    <a href="http://">
                        <SiGmail style={iconStyles} />
                    </a>                    
                    
                </div>
                        
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover" 
                    className="downloadResume"
                    onClick={() => downloadResume(resumeUrl)}
                >
                    <span>Download Resume.</span>
                    <FaCloudDownloadAlt />
                </motion.button>

                <div>&copy; {currentYear} <b>Daniel Jonathan</b> all rights reserved. </div>
            </footer>
        </div>
    )
}

export default Contact