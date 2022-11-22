import React, { useState } from "react";
import Hero from "../Hero/index";
const Nav = ({navChoice,setNavChoice}) => {
  const changeNav=(choice)=>{
    setNavChoice(choice)
  }
  return (
    <div>
 
        <nav>
          <ul className="flex-row" style={{ color: "white" }}>
            <li className="mx-2" onClick={() => changeNav("AboutMe")}>
              About Me
            </li>
            <li className="mx-2" onClick={() => changeNav("Portfolio")}>
              Portfolio
            </li>
            <li className="mx-2" onClick={() => changeNav("Contact")}>
              Contact
            </li>
            <li className="mx-2" onClick={() => changeNav("Resume")}>
              Resume
            </li>
          </ul>
        </nav>
    
      
    </div>
  );
};

export default Nav;
