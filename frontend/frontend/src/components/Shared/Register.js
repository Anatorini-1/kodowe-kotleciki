import React from "react";
import "../../styles/Login.css";
import { useState } from "react";
import axios from "axios";
function Register({ setView }) {
  const register = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage(<div className="error">Passwords must match!</div>);
      return;
    }
    const data = {
      f_name: firstName,
      l_name: lastName,
      name: userName,
      age: parseInt(age),
      email: email,
      password: password,
      access: age < 18 ? 3 : 2,
      score: 0,
    };
    console.log(data);
    axios
      .post("http://192.168.134.36:8000/api/register", data)
      .then((response) => {
        console.log(response);
        setMessage("Success! You can now log in.");
        setView("login");
      })
      .catch((error) => {
        setMessage("Error!");
      });
  };

  const [email, setEmail] = useState("c@c.com");
  const [password, setPassword] = useState("b");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(null);

  return (
    <div className="loginContainer">
      <div className="loginFor" m>
        <h2 className="loginTitle">Sign Up</h2>
        {message == null ? null : (
          <>
            <div className="loginError">{message}</div>
          </>
        )}
        <div className="inputFormElement">
          <input
            className="inputText"
            type="text"
            name="email"
            placeholder="Your email"
            required
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="text"
            name="userLogin"
            placeholder="Your username"
            required
            defaultValue={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="password"
            name="userPassword"
            placeholder="Your password"
            required
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="password"
            name="userPassword2"
            placeholder="Confirm your password"
            required
            defaultValue={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="text"
            name="userFName"
            placeholder="Your first name"
            required
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            className="inputText"
            type="text"
            name="userLName"
            placeholder="Your last name"
            required
            defaultValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="inputFormElement">
          <input
            type="radio"
            value="0"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />{" "}
          Kid
          <input
            type="radio"
            value="18"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />{" "}
          Adult
        </div>
        <div className="inputFormElement">
          <button
            type="submit"
            className="loginButton"
            onClick={(e) => {
              e.preventDefault();
              register(e);
            }}
          >
            Sing up!
          </button>
        </div>
        <span className="loginLink">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView("login");
            }}
          >
            Already have an account? Log in!
          </a>
        </span>
      </div>
    </div>
  );
}

export default Register;
