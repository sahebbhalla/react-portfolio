import React from "react";
import Project from "../Project";
import berg from '../../assets/images/berg.png'
import opinion from '../../assets/images/opinion.gif'
import runBuddy from '../../assets/images/runBuddy.png'
import photoPort from '../../assets/images/photoport.png'
import contactCard from '../../assets/images/contact-card.png'
import passwordGenerator from '../../assets/images/passwordgenerator.png'

const Portfolio =() =>{
    const projects=[
        {
            name:"Berg",
            src:berg,
            link:'https://sahebbhalla.github.io/BERG/'
        },
        {
            name:"Opinionated",
            src:opinion,
            link:'https://opinionated-scs.herokuapp.com/'
        },
        {
            name:"Run Buddy",
            src:runBuddy,
            link:'https://sahebbhalla.github.io/run-buddy/'
        },
        {
            name:"Photo Port",
            src:photoPort,
            link:'https://sahebbhalla.github.io/photo-port/'
        },
        {
            name:"Contact Card",
            src:contactCard,
            link:'https://github.com/sahebbhalla/contact-card'
        },
        {
            name:"Password generator ",
            src:passwordGenerator,
            link:'https://sahebbhalla.github.io/password-generator/'
        }
    ]
    return(
        <div className="heroMain">
            <h1>Portfolio</h1>
            <div className="projects">
            {projects.map((project)=>(
              <div key = {project.name} >
                    <Project project={project}  />
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default Portfolio