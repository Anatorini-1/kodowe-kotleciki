import React, { useEffect } from "react";
import "../../styles/CourseQuiz.css";
import axios from "axios";
function CourseQuiz({ courseData, setShow, setCourseToShow, user }) {
  //console.log(courseData.quiz[0]);
  const [score, setScore] = React.useState([]);
  React.useEffect(() => {
    console.log("useEffect");
    let tmp = [];
    for (let i = 0; i < courseData.quiz.length; i++) {
      tmp.push(0);
    }
    setScore(tmp);
  }, []);

  useEffect(() => {
    console.log(score);
  }, [score]);
  let i = 1;
  console.log("USER", user);
  return (
    <>
      <div className="quiz-container">
        <div className="quiz-top">
          <h1>Quiz</h1>
          <p>Quiz questions</p>
        </div>
        {courseData.quiz.map((e) => {
          let i = 0;
          return (
            <>
              <div className="quiz-question">
                <h1>{e.pytanie}</h1>
                {e.odpowiedzi.map((odp) => {
                  return (
                    <div className="quiz-anwser">
                      <input
                        type="radio"
                        name={`odp${e.pytanie}`}
                        value={i++}
                        onInput={(ev) => {
                          let tmp = score;
                          if (ev.target.value == e.popodp) {
                            console.log(
                              "dobra odpowiedz",
                              courseData.quiz.indexOf(e)
                            );
                            tmp[courseData.quiz.indexOf(e)] = 1;
                            setScore([...tmp]);
                          } else {
                            console.log("zla odpowiedz");
                            tmp[courseData.quiz.indexOf(e)] = 0;
                            setScore([...tmp]);
                          }
                        }}
                      />
                      {odp}
                      <br />
                    </div>
                  );
                })}
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <div className="quiz-buttons">
        <button
          onClick={() => {
            setCourseToShow(null);
          }}
        >
          Back to dashboard
        </button>

        <button
          onClick={() => {
            setShow("content");
          }}
        >
          Learn
        </button>
        <button
          onClick={() => {
            if (user == null) return;
            let result = score.reduce((a, b) => a + b) / courseData.quiz.length;
            if (result < 0.5) {
              alert("Nie zdałeś");
              return;
            }
            axios({
              url: "http://192.168.134.36:8000/api/addfinishedcourse",
              method: "POST",
              withCredentials: true,
              data: {
                course_id: courseData.id,
                jwt: user.jwt,
              },
            })
              .then((response) => {
                axios({
                  url: "http://192.168.134.36:8000/api/updateUser",
                  method: "POST",
                  withCredentials: true,
                  data: {
                    score: user.score + courseData.score,
                    jwt: user.jwt,
                  },
                })
                  .then((response) => {})
                  .catch((error) => {
                    console.log(error);
                  });
                alert("Dzięki");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Grade Quiz
        </button>
      </div>
    </>
  );
}

export default CourseQuiz;
