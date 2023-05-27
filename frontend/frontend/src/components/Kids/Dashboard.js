import React from "react";
import Nav from "../Shared/Nav";
import kidsMap from "../../img/kidsMap.png";

import "../../styles/kidsDash.css";
import ImageMapper from "react-img-mapper";
function Dashboard() {
  return (
    <div className="dashboarddashboard">
      <div className="kids-dash">
        <img src={kidsMap} alt="Kids Map" className="kids-map" />
        <button
          key={"House"}
          className="clickable-area"
          style={{
            left: "160px",
            top: "80px",
            width: "250px",
            height: "250px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("House");
          }}
        >
          House
        </button>
        <button
          key={"School"}
          className="clickable-area"
          style={{
            left: "570px",
            top: "100px",
            width: "350px",
            height: "200px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("School");
          }}
        >
          School
        </button>
        <button
          key={"Event"}
          className="clickable-area"
          style={{
            left: "1020px",
            top: "150px",
            width: "250px",
            height: "200px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("Event");
          }}
        >
          Event
        </button>
        <button
          key={"Internet"}
          className="clickable-area"
          style={{
            left: "390px",
            top: "640px",
            width: "200px",
            height: "200px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("Internet");
          }}
        >
          Internet
        </button>
        <button
          key={"Pool"}
          className="clickable-area"
          style={{
            left: "680px",
            top: "580px",
            width: "300px",
            height: "150px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("Pool");
          }}
        >
          Pool
        </button>
        <button
          key={"Crosswalk"}
          className="clickable-area"
          style={{
            left: "920px",
            top: "350px",
            width: "100px",
            height: "150px",
            cursor: "pointer",
            position: "absolute",
          }}
          onClick={() => {
            console.log("Crosswalk");
          }}
        >
          Crosswalk
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
