import { useState } from "react";
import React from "react";
function validateEmail(email) {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
const Contact = () => {
  const submitMethod = (event) => {
    event.preventDefault();
  };
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setErrorMessage] = useState("");

  const inputChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid Email address ");
      } 
    }
    if (!error) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="heroMain">
      <form className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Please enter your name"
            defaultValue={formState.name}
            onBlur={inputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            defaultValue={formState.email}
            onBlur={inputChange}
          />{" "}
 
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
          name="message"
            className="form-control"
            placeholder="Your message here..."
            defaultValue={formState.message}
            onBlur={inputChange}
          />
        </div>
        {error && (
            <div>
              <p className="error">{error}</p>
            </div>
          )}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitMethod}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
