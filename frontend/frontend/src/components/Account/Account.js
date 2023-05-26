import React from "react";
function Account({ user, setUser, setView }) {
  return (
    <div className="container">
      <div className="accountData">
        <h1>Your data: </h1>
        <p>First name: {user.f_name}</p>
        <p>Last name: {user.l_name}</p>
      </div>
      <div className="accountData">
        <h1>Your certification:</h1>
      </div>
    </div>
  );
}

export default Account;
