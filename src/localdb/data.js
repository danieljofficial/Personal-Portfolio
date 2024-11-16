import {FaReact, FaJsSquare, FaHtml5, FaCss3, FaGit, FaNodeJs, FaRust} from 'react-icons/fa' 
import {BiLogoMongodb, BiLogoTypescript} from 'react-icons/bi'
import { SiExpress, SiTailwindcss } from 'react-icons/si'


export const data = [
    {
        projectName: 'Calculator',
        projectUrl: '../public/calculator.jpg',
        projectLink: 'https://64c19167d559ce17ede06f63--spiffy-profiterole-7a3b16.netlify.app/',
        projectDesc: 'Simple calculator built with React and CSS.',
        projectIcons: [FaReact, FaCss3]
    },

    {
        projectName: 'Multi step form',
        projectUrl: '../public/multi-step-form.jpg',
        projectLink: 'https://resilient-maamoul-e74e60.netlify.app/',
        projectDesc: 'Form handling with React and CSS.',
        projectIcons: [FaReact, FaCss3]
    },

    {
        projectName: 'Task tracker',
        projectUrl: '../public/todo-app.jpg',
        projectLink: 'https://todo-tracker-backend-4k8q.onrender.com',
        projectDesc: 'Crud app with React, CSS, Node.js and MongoDB.',
        projectIcons: [FaReact, FaCss3, FaNodeJs, BiLogoMongodb]
    },

    {
        projectName: 'Portfolio',
        projectUrl: '../public/portfolio.png',
        projectLink: 'https://personal-portfolio-one-lake-29.vercel.app/',
        projectDesc: 'Portfolio built with react, typescript, tailwind and css.',
        projectIcons: [FaReact, FaCss3, SiTailwindcss, BiLogoTypescript]
    },
]

export const skills = [
    {
        category: "Frontend",
        technology: "React",
        icon: FaReact
    },
    {
        category: "Frontend",
        technology: "Javascript",
        icon: FaJsSquare
    },
    {
        category: "Frontend",
        technology: "CSS",
        icon: FaCss3
    },
    {
        category: "Frontend",
        technology: "Tailwind",
        icon: SiTailwindcss
    },
    {
        category: "Backend",
        technology: "Node.js",
        icon: FaNodeJs
    },
    {
        category: "Backend",
        technology: "Express",
        icon: SiExpress
    },
    {
        category: "Databases",
        technology: "MongoDB",
        icon: BiLogoMongodb
    },
    {
        category: "Tools",
        technology: "Git",
        icon: FaGit
    },
    {
        category: "Tools",
        technology: "Rust",
        icon: FaRust
    },
    {
        category: "Tools",
        technology: "TypeScript",
        icon: BiLogoTypescript
    },
]

export const certifications = [
    {
        description: "Bachelor Of Production Engineering",
        issuer: "Issued by: University Of Benin",
        date: "Date: June 2023"
    }
]