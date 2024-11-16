import React from 'react'

function Card({projectName, projectImg, projectDesc, projectLink, projectIcons}) {

    const projectImgStyles = {
        minHeight: '12rem',
        backgroundImage: `url(${projectImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '18px',
    }
    const iconStyles = {
        width: '1.5rem',
        height: '1.5rem',
    }
    return (
        <div className='card'>
            
            <div className="card-front">                               
                <div style={projectImgStyles} className='background'></div>
                <div className="projectIcons">
                    {
                        projectIcons.map((Icon, i) => <Icon  key={i}/>)
                    }
                </div>
                <p>{projectName}</p> 
                
                <div>{projectDesc}</div> 
                <button className="projectLink">
                    <a href={projectLink} target="_blank">View project</a> 
                </button>
            </div>
            
            
                
        </div>
  )
}

export default Card