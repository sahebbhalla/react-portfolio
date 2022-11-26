import React from "react";

const Project =({project})=>{
    return (
        <div className="project" style={{backgroundImage:`url(${project.src})`}} >
           <a href={project.link}> <h1>{project.name}</h1></a>
        </div>
    )
}

export default Project