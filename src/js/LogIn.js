import React from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  const onClick = () => {
    const id = document.querySelector("#id").value;
    const password = document.querySelector("#password").value;
    if (localStorage.getItem(id) === null) {
      alert("Given ID does not exist");
    } else if (JSON.parse(localStorage.getItem(id)) === password) {
      localStorage.setItem("id", JSON.stringify(id));
      alert("Successfully Logged In");
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div>
      <h1 id="headers">Please Log In</h1>
      <input id="id" placeholder="ID" />
      <br />
      <input id="password" placeholder="Password" />
      <br />
      <Link to="/">
        <button id="logInButton" onClick={onClick}>
          Log In
        </button>
      </Link>
      <Link to="/register">
        <button id="logInButton">Register</button>
      </Link>
    </div>
  );
};

export default LogIn;
