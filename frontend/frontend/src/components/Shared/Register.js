import React from "react";
import "../../styles/Login.css";

function Register() {
  const register = (e) => {
    alert("Dzięki");
  };
  return (
    <>
      <div className="loginForm">
        <h2 className="loginTitle">SIGN UP</h2>
        <form onSubmit={register}>
          <div className="inputFormElement">
            <input
              className="inputText"
              type="text"
              name="userLogin"
              placeholder="Your Login"
              required
            />
          </div>
          <div className="inputFormElement">
            <input
              className="inputText"
              type="password"
              name="userPassword"
              placeholder="Your password"
              required
            />
          </div>
          <div className="inputFormElement">
            <input
              className="inputText"
              type="password"
              name="userPassword2"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="inputFormElement">
            <input
              className="inputText"
              type="text"
              name="userFName"
              placeholder="Your password"
              required
            />
          </div>
          <div className="inputFormElement">
            <input
              className="inputText"
              type="text"
              name="userLName"
              placeholder="Your password"
              required
            />
          </div>

          <div className="inputFormElement">
            <button type="submit" className="loginButton">
              Sing up!
            </button>
          </div>
          <span className="loginLink">
            <a href="#">Already have an account? Log in!</a>
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
