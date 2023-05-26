import React from "react";
import Nav from "../Shared/Nav";
import kidsMap from "../../img/kidsMap.png";

import "../../styles/kidsDash.css";
import ImageMapper from "react-img-mapper";
function Dashboard({ user, setUser }) {
  return (
    <div className="kidsMap" style={{ backgroundImage: `url(${kidsMap})` }}>
      Hejka
    </div>
  );
}

export default Dashboard;
