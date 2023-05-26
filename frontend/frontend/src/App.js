import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import KidsDash from "./components/Kids/Dashboard";
import AdultDash from "./components/Adults/Dashboard";
import { useState } from "react";
function App() {
  const [user, setUser] = useState({});
  const [view, setView] = useState("welcome");
  switch (view) {
    case "welcome":
      return <Welcome setView={setView} />;
    case "kids":
      return <KidsDash />;
  }
  return <Welcome setView={setView}></Welcome>;
}

export default App;
