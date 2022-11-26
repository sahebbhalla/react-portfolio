import React  from "react";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
const renderChoice =(navName) =>{
    switch(navName){
        case "AboutMe":
            return <About />
        case "Portfolio":
            return <Portfolio />
        case "Contact":
            return <Contact />
        case "Resume":
            return <Resume />    
        default:
        return <About />
    }

}
const Hero = ({navName})=>{

    return (
        <section className="hero">
           { renderChoice(navName)}
        </section>
    )
}

export default Hero