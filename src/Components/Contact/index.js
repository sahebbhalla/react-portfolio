import { useState } from "react";
import React from "react";

const Contact =() =>{
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
      });

    

    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
      };
    return (
      <div className="heroMain">
      <form className="container">
      <div className="form-group">
        <label for="email">Email address</label><br />
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label for="password">Password</label><br />
        <input type="password" className="form-control" id="password" placeholder="Password"/>
      </div>
      <div className="form-group">
        <label for="message">Message</label><br />
        <textarea className="form-control" id="message" placeholder="Your message here..."/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}

export default Contact