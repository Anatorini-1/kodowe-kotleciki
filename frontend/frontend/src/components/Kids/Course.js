import React from "react";
import { useState } from "react";
import CourseContent from "../Adults/CourseContent";
import CourseQuiz from "../Adults/CourseQuiz";
function Course({ courseData, setCourseToShow, user }) {
  const [show, setShow] = useState("content");

  return (
    <div>
      {show === "content" ? (
        <>
          <CourseContent
            user={user}
            courseData={courseData}
            setShow={setShow}
            setCourseToShow={setCourseToShow}
          />
        </>
      ) : (
        <>
          <CourseQuiz
            courseData={courseData}
            setShow={setShow}
            setCourseToShow={setCourseToShow}
            user={user}
          />
        </>
      )}
      {}
    </div>
  );
}

export default Course;
