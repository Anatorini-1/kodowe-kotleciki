import React from "react";
import Slider from "../Shared/Slider";
function Dashboard({ user, setUser }) {
  return (
    <div>
      <div>Wszystkie Kursy</div>
      <div>Kategoria kursu</div>
      <Slider category={"Essa"} />
    </div>
  );
}

export default Dashboard;
