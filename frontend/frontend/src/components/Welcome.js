import React from "react";
import Nav from "./Shared/Nav";

import "../styles/Welcome.css";
function Welcome({ setView }) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="kids">
          <h1>Kids</h1>{" "}
        </div>
      </div>
      <div className="grid-item">
        <div className="adults">
          <img src={require("../img/kids.jpg")} alt="123" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
