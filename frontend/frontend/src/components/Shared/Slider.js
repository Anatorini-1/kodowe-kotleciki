import React from "react";
import "../../styles/Slider.css";
import { useEffect, useState } from "react";
function Slider({ category }) {
  const [slides, setSlides] = useState([]);
  const [slidesToRender, setSlidesToRender] = useState([]);
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideIndex = 0;
    let numVisibleSlides;

    function calculateVisibleSlides() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1199) {
        numVisibleSlides = 3;
      } else if (screenWidth >= 760) {
        numVisibleSlides = 2;
      } else {
        numVisibleSlides = 1;
      }
    }

    function showSlides() {
      slidesContainer.style.transform = `translateX(-${
        slideIndex * (100 / numVisibleSlides)
      }%)`;
    }

    function showPreviousSlide() {
      slideIndex = Math.max(slideIndex - 1, 0);
      showSlides();
    }

    function showNextSlide() {
      slideIndex = Math.min(slideIndex + 1, slides.length - numVisibleSlides);
      showSlides();
    }

    prevBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);

    calculateVisibleSlides();
    showSlides();

    window.addEventListener("resize", () => {
      calculateVisibleSlides();
      showSlides();
    });
  }, []);

  useEffect(() => {
    fetch("http://192.168.134.36:8000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSlides(data);
      });
  }, []);
  useEffect(() => {
    console.log(slides.length);
    let newSlides = [];
    for (let i = 0; i < slides.length; i++) {
      if (slides[i]["category"] !== category) continue;
      newSlides.push(
        <div className="slide" id={`slide${i}`} key={i}>
          <div className="content">
            <h2>{slides[i]["name"]}</h2>
            <p>{slides[i]["description"]}</p>
          </div>
          <button className="choose">Choose</button>
        </div>
      );
    }
    setSlidesToRender(newSlides);
  }, [slides]);

  return (
    <>
      <div className="slider-container">
        <div className="left-arrow">
          <button id="prevBtn">&#8592;</button>
        </div>

        <div className="slider">
          <div className="slides-container">{slidesToRender}</div>
        </div>

        <div className="right-arrow">
          <button id="nextBtn">&#8594;</button>
        </div>
      </div>
      <script src="slider.js"></script>
    </>
  );
}

export default Slider;
