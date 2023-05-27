import React from "react";
import Nav from "./Shared/Nav";
import BGImage from "../img/12.png";
import AdultIMG from "../img/13.png";
import "../styles/Welcome.css";
function Welcome({ setView }) {
  console.log(BGImage);
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div
          className="kids"
          style={{ backgroundImage: `url(${BGImage})` }}
          onClick={(e) => {
            e.preventDefault();
            setView("kidsDash");
          }}
        >
          <h1>Kids</h1>{" "}
        </div>
      </div>
      <div className="grid-item">
        <div
          className="adults"
          style={{ backgroundImage: `url(${AdultIMG})` }}
          onClick={(e) => {
            e.preventDefault();
            setView("adultsDash");
          }}
        >
          <h1>Adults</h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
