import React from "react";
import "../../styles/Account.css";
function Account({ user, setUser, setView }) {
  console.log(user);
  return (
    <div className="container">
      <div className="accountData">
        <h1>Your data: </h1>
        <p>First name: {user.f_name}</p>
        <p>Last name: {user.l_name}</p>
      </div>
      <div className="accountData">
        <h1>Your certifications:</h1>
        <ul className="certList">
          {/* user.certificatce.forEach(element => {
          <li>
            <div className="certInfo">
            <p>{element}.name</p>
            <p className="certDate">{element}.date</p>
            </div>
            <button>download</button>
          </li>   
        }); 
        */}
        </ul>
      </div>
    </div>
  );
}

export default Account;
