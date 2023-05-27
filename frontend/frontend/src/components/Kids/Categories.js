import React from "react";
import "../../styles/KidsKategories.css";
import Pool from "../../img/Pool.png";
import Slider from "../Shared/Slider";
import Course from "./Course";
function Categories({ user, setCategoryToShow, category }) {
  const [courses, setCourses] = React.useState(null);
  const [coursesToShow, setCoursesToShow] = React.useState(null);
  const [course, setCourse] = React.useState(null);

  if (course !== null) {
  }
  return <Slider category={category} setCourseToShow={setCourse} />;
}

export default Categories;
