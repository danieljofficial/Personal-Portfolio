import './App.css'
import './index.css'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Qualifications from './components/Qualifications'
import { useEffect, useState } from 'react'
import { ThemeContexts } from './contexts/ThemeContext'
import {BrowserRouter, json} from 'react-router-dom'

function App() {

  const [isLightTheme, setIsLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? JSON.parse(savedTheme) : false
  });

  return (
    <BrowserRouter>
      <ThemeContexts.Provider value={{isLightTheme, setIsLightTheme}} >
        <div className="App" id={isLightTheme ? '' : 'darktheme'}>
          <Navbar />
          <About />
          <Qualifications />
          <Projects />
          <Contact />
        </div>
      </ThemeContexts.Provider>
      </BrowserRouter>
  )
}

export default App
