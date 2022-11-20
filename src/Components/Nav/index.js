import React, { useState } from "react";
import Hero from "../Hero/index";
const Nav = () => {
  const [navChoice, setNavChoice] = useState("AboutMe");
  const changeNav = (navName) => {
    setNavChoice(navName);
  };
  return (
    <div>
      <header
        className="flex-row px-1"
        style={{ justifyContent: "space-between" }}
      >
        <h2 className="flex">
          <a href="/">Saheb Bhalla</a>
        </h2>
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
      </header>
      <Hero navName={navChoice} />
    </div>
  );
};

export default Nav;
