import React from "react";
import "../../styles/Account.css";
import { useEffect } from "react";
import axios from "axios";
function Account({ user, setUser, setView }) {
  const [certificates, setCertificates] = React.useState([]);

  axios.defaults.withCredentials = true;
  const tempUser = async (e) => {
    if (!user) {
      setView("login");
      return;
    }
    console.log("PROSZE PROSZE PROSZE PROSZE ");
    axios({
      url: "http://192.168.134.36:8000/api/user",
      method: "POST",
      withCredentials: true,
      data: {
        jwt: user.jwt,
      },
    })
      .then((response) => {
        console.log("prosze matko boska", response.data);
        setCertificates(response.data);
      })
      .catch((error) => {
        console.log("ZLITUJ SIE PROSZE", error);
      });
  };
  useEffect(() => {
    tempUser();
  }, []);
  return (
    <div className="container">
      <div className="accountData nameData">
        <h1>Your data: </h1>
        <p>First name: {user.f_name}</p>
        <p>Last name: {user.l_name}</p>
        <p>Score: {user.score}</p>
      </div>
      <div className="accountData certData">
        <h1>Your certifications:</h1>
        <ul className="ulCert">
          {console.log("CHUUUJ", certificates.certificats)}

          {certificates.certificats?.map((element) => {
            console.log(element);
            return (
              <div className="certInfo">
                <li>
                  {element.course.name}
                  <br />
                  <span className="certDate">
                    {" "}
                    Date accquired:{" "}
                    {element.date.slice(0, 10) +
                      " at " +
                      element.date.slice(12, 19)}
                  </span>
                </li>
                <button className="certButton">Download</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Account;
