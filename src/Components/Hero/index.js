import React  from "react";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
const renderChoice =(navName) =>{
    switch(navName){
        case "AboutMe":
            return <About />
        case "Portfolio":
            return <Portfolio />
        case "Contact":
            return <Contact />    
    }

}
const Hero = ({navName})=>{

    return (
        <section className="Hero">
           { renderChoice(navName)}
        </section>
    )
}

export default Hero