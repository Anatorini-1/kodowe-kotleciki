import React from "react";
import "../../styles/Login.css";
import axios from "axios";
import Nav from "./Nav";
function Login({ user, setUser }) {
  const login = (e) => {
    /*alert("Dzięki");
    res = axios.post(
      "http://192.168.134.36:8000/api/login",
      {
        email: e.target.userLogin.value,
      }
    );*/
    console.log(e.target);
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h2 className="loginTitle">SIGN IN</h2>
        <form onSubmit={login}>
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
            <button type="submit" className="loginButton">
              Log in!
            </button>
          </div>
          <span className="loginLink">
            <a href="#">Don't have an account? Register now!</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
