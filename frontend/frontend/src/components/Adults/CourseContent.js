import React from "react";
import "../../styles/CourseContent.css";
function CourseContent({ courseData, setShow, setCourseToShow, user }) {
  console.log(courseData);
  return (
    <>
      <div className="course-top">
        <h1>Teoria</h1>
      </div>
      {courseData.content.map((element) => {
        return (
          <>
            <div className="course-content">
              <h1>{element.title}</h1>
              <p>{element.content}</p>
            </div>
            <hr />
          </>
        );
      })}
      <div className="course-buttons">
        <button
          onClick={() => {
            setCourseToShow(null);
          }}
        >
          Back to dashboard
        </button>

        <button
          onClick={() => {
            if (user !== null) {
              setShow("quiz");
            } else {
              alert("Musisz być zalogowany");
            }
          }}
        >
          Quiz
        </button>
      </div>
    </>
  );
}

export default CourseContent;
