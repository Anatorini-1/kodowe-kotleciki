import React from "react";
import Nav from "../Shared/Nav";
import kidsMap from "../../img/kidsMap.png";

import "../../styles/kidsDash.css";
import ImageMapper from "react-img-mapper";
function Dashboard({ user, setUser }) {
  const MappedImage = () => {
    // Define the clickable areas data structure
    const clickableAreas = [
      { id: 1, x: 100, y: 100, width: 50, height: 50 },
      { id: 2, x: 200, y: 200, width: 50, height: 50 },
      // Add more clickable areas as needed
    ];

    // Event handler for button clicks
    const handleClick = (areaId) => {
      // Handle the button click based on the areaId
      console.log(`Button ${areaId} clicked!`);
    };
  };
  return <div></div>;
}

export default Dashboard;
