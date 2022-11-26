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
            <li className={`mx-2 ${navChoice==='AboutMe' && 'navActive'}`} onClick={() => changeNav("AboutMe")}>
              About Me
            </li>
            <li className={`mx-2 ${navChoice==='Portfolio' && 'navActive'}`} onClick={() => changeNav("Portfolio")}>
              Portfolio
            </li>
            <li className={`mx-2 ${navChoice==='Contact' && 'navActive'}`} onClick={() => changeNav("Contact")}>
              Contact
            </li>
            <li className={`mx-2 ${navChoice==='Resume' && 'navActive'}`}onClick={() => changeNav("Resume")}>
              Resume
            </li>
          </ul>
        </nav>
    
      
    </div>
  );
};

export default Nav;
