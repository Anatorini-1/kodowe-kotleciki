import React from "react";
import "../../styles/Nav.css";

function Nav({ user, setUser, setView }) {
  const login = (e) => {
    e.preventDefault();
    setView("login");
  };
  const logout = (e) => {
    e.preventDefault();
    setUser(null);
  };
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          setView("welcome");
        }}
      >
        EduSafety
      </div>
      <div className="right-options">
        <ul>
          {user === null ? (
            <>
              <li>
                <a href="#" onClick={login}>
                  Login
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <span>
                  Hi, {user.name} {user.surname}
                </span>
              </li>
              <a href="#" onClick={logout}>
                Logout
              </a>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
