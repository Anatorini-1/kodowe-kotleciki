import React from "react";
import Nav from "../Shared/Nav";
import kidsMap from "../../img/kidsMap.png";
import Categories from "./Categories";
import "../../styles/kidsDash.css";
import ImageMapper from "react-img-mapper";
function Dashboard({ user }) {
  const [categoryToShow, setCategoryToShow] = React.useState(null);
  if (categoryToShow === null) {
    return (
      <div className="dashboarddashboard">
        <div className="kids-dash">
          <img src={kidsMap} alt="Kids Map" className="kids-map" />
          <button
            key={"House"}
            className="clickable-area"
            style={{
              left: "300px",
              top: "80px",
              width: "250px",
              height: "250px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("House");
            }}
          >
            House
          </button>
          <button
            key={"School"}
            className="clickable-area"
            style={{
              left: "700px",
              top: "100px",
              width: "350px",
              height: "200px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("School");
            }}
          >
            School
          </button>
          <button
            key={"Event"}
            className="clickable-area"
            style={{
              left: "1175px",
              top: "150px",
              width: "250px",
              height: "200px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("Event");
            }}
          >
            Event
          </button>
          <button
            key={"Internet"}
            className="clickable-area"
            style={{
              left: "550px",
              top: "640px",
              width: "200px",
              height: "200px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("Internet");
            }}
          >
            Internet
          </button>
          <button
            key={"Pool"}
            className="clickable-area"
            style={{
              left: "800px",
              top: "580px",
              width: "300px",
              height: "150px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("Pool");
            }}
          >
            Pool
          </button>
          <button
            key={"Crosswalk"}
            className="clickable-area"
            style={{
              left: "1075px",
              top: "350px",
              width: "100px",
              height: "150px",
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() => {
              setCategoryToShow("Crosswalk");
            }}
          >
            Crosswalk
          </button>
        </div>
      </div>
    );
  } else
    return (
      <>
        <Categories
          category={categoryToShow}
          setCategoryToShow={setCategoryToShow}
          user={user}
        />
      </>
    );
}

export default Dashboard;
