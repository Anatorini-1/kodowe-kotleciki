import React from "react";
import "../styles/Welcome.css";
function Welcome({ setView }) {
  console.log(setView);
  return (
    <div>
      <div
        className="showKidsDash"
        onClick={() => {
          setView("kidsDash");
        }}
      >
        Kids
      </div>
      <div
        className="showAdultsDash"
        onClick={() => {
          setView("adultsDash");
        }}
      >
        Adults
      </div>
    </div>
  );
}

export default Welcome;
