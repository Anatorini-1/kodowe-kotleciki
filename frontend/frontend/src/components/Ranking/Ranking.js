import React from "react";
import "../../styles/Ranking.css";
import { useState } from "react";
import axios from "axios";
function Ranking({ user, setUser, setView }) {
  const [users, setUsers] = React.useState([]);
  axios.defaults.withCredentials = true;
  const temp = async (e) => {
    if (!user) {
      setView("login");
      return;
    }
    axios({
      url: "http://192.168.134.36:8000/api/userList",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        let tmp = Array.from(response.data);
        tmp = tmp.sort((a, b) => {
          return b.score - a.score;
        });

        setUsers(tmp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    temp();
  }, []);
  return (
    <div className="list-container">
      <h1 className="list-title">Ranking</h1>
      <ol className="list">
        {users?.map((element) => {
          return (
            <li>
              {element.name} {element.score}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Ranking;
