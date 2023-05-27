import React from "react";
import { useState } from "react";
import CourseContent from "./CourseContent";
import CourseQuiz from "./CourseQuiz";
function Course({ courseData }) {
  const [show, setShow] = useState("content");

  return (
    <div>
      {show === "content" ? (
        <>
          <CourseContent courseData={courseData} />
        </>
      ) : (
        <>
          <CourseQuiz courseData={courseData} />
        </>
      )}
      {}
    </div>
  );
}

export default Course;
