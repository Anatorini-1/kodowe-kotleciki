import React from "react";
import Slider from "../Shared/Slider";
import "../../styles/adultDash.css";
import { useState, useEffect } from "react";
function Dashboard({ user, setUser }) {
  const [category, setCategory] = useState("Essa");
  const [categories, setCategories] = useState([]);
  useEffect(() => {}, [category]);
  useEffect(() => {
    fetch("http://192.168.134.36:8000/api/categoryList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setCategory(categories[0]);
  }, [categories]);
  let i = 0;
  return (
    <div className="categories-container">
      <div className="all-categories">Wszystkie Kursy</div>
      <div className="categories">Kategoria kursu</div>
      <select
        name=""
        id=""
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((category) => (
          <option id={i++} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Slider category={category} />
    </div>
  );
}

export default Dashboard;
