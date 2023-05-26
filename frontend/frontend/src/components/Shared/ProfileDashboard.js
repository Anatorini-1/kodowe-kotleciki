import React from "react";
import Nav from "./Shared/Nav";
function ProfileDashboard({ user, setUser }) {
  return (
    <div>
      <Nav user={user} setUser={setUser} />
      ProfileDashboard
    </div>
  );
}

export default ProfileDashboard;
