import React from "react";
import "../../styles/AddCourse.css";
import { useState } from "react";
import axios from "axios";
function AddCourse({ user }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="add-form">
      <input
        placeholder="Name"
        type="text"
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <input
        placeholder="Description"
        type="text"
        defaultValue={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <input
        placeholder="Category"
        type="text"
        defaultValue={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />{" "}
      <input
        placeholder="Score"
        type="text"
        defaultValue={category}
        onChange={(e) => {
          setScore(parseInt(e.target.value));
        }}
      />{" "}
      <br />
      <textarea
        type="text"
        rows="8"
        cols="56"
        defaultValue={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>{" "}
      <br />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          axios({
            url: "http://192.168.134.36:8000/api/courses",
            method: "POST",
            withCredentials: true,
            data: {
              name: name,
              description: description,
              category: category,
              jwt: user.jwt,
              score: score,
              content: {
                content: content,
                title: "title",
              },
            },
          })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {});
        }}
      />
    </div>
  );
}

export default AddCourse;
