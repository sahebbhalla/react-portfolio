import React from "react";
import sample from '../../assets/video/pexels-mikhail-nilov-7534245.mp4'
import avatar from '../../assets/avatar/img_avatar.png'
const About =()=>{

    return (
        <div className="heroMain">
           <span> <h1>About</h1><img src={avatar} alt="Avatar" className="avatar" /></span>



            <p>Software developer with over 1 year of experience working as a Full Stack software developer for one of the most trusted experiential learning solution provider for post-secondary institutions in Canada.<br/><br/>

            Experienced in Software developement, maintianing Software infrastrucutre and working closely with the end user to understand use cases to provide a better experience for students. Experienced in operating and managing different corporate software and operational systems.<br/><br/>

            Proactive active learner with the ability to meet above expectation targets with high-quality work product. Excellent communication with strong problem-solving skill. Outstanding team player with awarded professionalism. Proficient in Microsoft office and other Management tools.<br/>
            </p>
        </div>
    )
}

export default About

