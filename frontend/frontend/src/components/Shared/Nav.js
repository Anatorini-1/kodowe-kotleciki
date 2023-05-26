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
  const register = (e) => {
    e.preventDefault();
    setView("register");
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
              <li>
                <a href="#" onClick={register}>
                  Register
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setView("account");
                  }}
                >
                  Hi, {user.f_name} {user.l_name}
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
