import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import KidsDash from "./components/Kids/Dashboard";
import AdultDash from "./components/Adults/Dashboard";
import { useState, createContext, useEffect } from "react";
import Login from "./components/Shared/Login";
import Register from "./components/Shared/Register";
import Nav from "./components/Shared/Nav";
import Footer from "./components/Shared/Footer";
import Account from "./components/Account/Account";
import Course from "./components/Adults/Course";
import AddCourse from "./components/Admin/AddCourse";
import Ranking from "./components/Ranking/Ranking";
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
        setToShow(<AdultDash view={view} setView={setView} user={user} />);
        break;
      case "login":
        setToShow(<Login user={user} setUser={setUser} setView={setView} />);
        break;
      case "register":
        setToShow(<Register user={user} setUser={setUser} setView={setView} />);
        break;
      case "account":
        setToShow(<Account user={user} setUser={setUser} setView={setView} />);
        break;
      case "admin":
        setToShow(
          <AddCourse user={user} setUser={setUser} setView={setView} />
        );
        break;
      case "ranking":
        setToShow(<Ranking user={user} setUser={setUser} setView={setView} />);
    }
  }, [view]);
  useEffect(() => {
    if (user !== null) {
      if (user.access === 2) {
        setView("adultsDash");
      } else if (user.access === 3) {
        setView("kidsDash");
      }
    } else {
      setView("welcome");
    }
  }, [user]);

  return (
    <>
      <Nav user={user} setUser={setUser} setView={setView} />
      {toShow}
      <Footer />
    </>
  );
}

export default App;
