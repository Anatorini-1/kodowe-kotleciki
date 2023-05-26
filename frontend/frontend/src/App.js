import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import KidsDash from "./components/Kids/Dashboard";
import AdultDash from "./components/Adults/Dashboard";
import { useState, createContext, useEffect } from "react";
import Login from "./components/Shared/Login";
import Nav from "./components/Shared/Nav";
function App() {
  const [user, setUser] = useState(null);
  const [toShow, setToShow] = useState(null); // ["welcome","kidsDash","adultsDash","login"
  const [view, setView] = useState("welcome");
  useEffect(() => {
    switch (view) {
      case "welcome":
        setToShow(<Welcome view={view} setView={setView} />);
        break;
      case "kidsDash":
        setToShow(<KidsDash view={view} setView={setView} />);
        break;
      case "adultsDash":
        setToShow(<AdultDash view={view} setView={setView} />);
        break;
      case "login":
        setToShow(<Login user={user} setUser={setUser} />);
    }
  }, [view]);

  return (
    <>
      <Nav user={user} setUser={setUser} setView={setView} />
      {toShow}
    </>
  );
}

export default App;
