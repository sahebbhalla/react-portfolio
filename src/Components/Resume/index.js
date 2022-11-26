import React from 'react'
import file from '../../assets/resume/saheb resume.docx'
const Resume = () =>{
    return(
        <div className="heroMain">
        <h1>Resume & Cover Letter</h1>
        <button className='download'><a href={file} download>Download</a></button>
        
    </div>
    )
}

export default Resume 