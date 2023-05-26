import React, { useState } from "react";
import "../../styles/Login.css";
import axios from "axios";
import Nav from "./Nav";
function Login({ user, setUser, setView }) {
  const [userName, setUserName] = useState("c@c.com");
  const [password, setPassword] = useState("b");
  const [message, setMessage] = useState(null);
  const login = async (e) => {
    axios
      .post("http://192.168.134.36:8000/api/login", {
        email: userName,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        setMessage("Wrong login or password");
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h2 className="loginTitle">SIGN IN</h2>
        {message}
        <div className="inputFormElement">
          <input
            className="inputText"
            type="text"
            name="userLogin"
            placeholder="Your Login"
            defaultValue={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="password"
            name="userPassword"
            placeholder="Your password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="inputFormElement">
          <button
            type="submit"
            className="loginButton"
            onClick={(e) => {
              e.preventDefault();
              login(e);
            }}
          >
            Log in!
          </button>
        </div>
        <span className="loginLink">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView("register");
            }}
          >
            Don't have an account? Register now!
          </a>
        </span>
      </div>
    </div>
  );
}

export default Login;
