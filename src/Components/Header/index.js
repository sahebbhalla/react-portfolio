import React from "react";
import Nav from "../Nav";
const Header = ({navChoice,setNavChoice}) =>{
    return (
        
        <header className="flex-row px-1"
        style={{ justifyContent: "space-between" }}>
            <h2 className="flex">
            <a href="/">Saheb Bhalla</a>
            </h2>
             <Nav navChoice={navChoice} setNavChoice={setNavChoice}/>
        </header>
     
    )
}

export default Header