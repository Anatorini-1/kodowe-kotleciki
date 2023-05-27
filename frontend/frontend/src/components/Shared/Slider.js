import React, { useEffect, useState, useRef } from "react";
import "../../styles/Slider.css";

function Slider({ category, setCourseToShow }) {
  const [slides, setSlides] = useState([]);
  const [slidesToRender, setSlidesToRender] = useState([]);
  const slidesContainerRef = useRef(null);
  const slideIndexRef = useRef(0);
  const numVisibleSlidesRef = useRef(0);

  useEffect(() => {
    function calculateVisibleSlides() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1199) {
        numVisibleSlidesRef.current = 3;
      } else if (screenWidth >= 760) {
        numVisibleSlidesRef.current = 2;
      } else {
        numVisibleSlidesRef.current = 1;
      }
    }

    function showSlides() {
      slidesContainerRef.current.style.transform = `translateX(-${
        slideIndexRef.current * (100 / numVisibleSlidesRef.current)
      }%)`;
    }

    function showPreviousSlide() {
      slideIndexRef.current = Math.max(slideIndexRef.current - 1, 0);
      showSlides();
    }

    function showNextSlide() {
      slideIndexRef.current = Math.min(
        slideIndexRef.current + 1,
        slides.length - numVisibleSlidesRef.current
      );
      showSlides();
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", showPreviousSlide);
    nextBtn.addEventListener("click", showNextSlide);

    calculateVisibleSlides();
    showSlides();

    window.addEventListener("resize", () => {
      calculateVisibleSlides();
      showSlides();
    });

    return () => {
      prevBtn.removeEventListener("click", showPreviousSlide);
      nextBtn.removeEventListener("click", showNextSlide);
      window.removeEventListener("resize", calculateVisibleSlides);
    };
  }, [slides]);

  useEffect(() => {
    fetch("http://192.168.134.36:8000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSlides(data);
      });
  }, []);

  useEffect(() => {
    const newSlides = slides
      .filter((slide) => slide.category === category)
      .map((slide, index) => (
        <div className="slide" id={`slide${index + 1}`} key={index}>
          <div className="content">
            <h2>{slide.name}</h2>
            <p>{slide.description}</p>
          </div>
          <button
            className="choose"
            onClick={(e) => {
              setCourseToShow(slide);
            }}
          >
            Choose
          </button>
        </div>
      ));

    setSlidesToRender(newSlides);
  }, [slides, category, setCourseToShow]);

  return (
    <>
      <div className="slider-container">
        <div className="left-arrow">
          <button id="prevBtn">&#8592;</button>
        </div>

        <div className="slider">
          <div className="slides-container" ref={slidesContainerRef}>
            {slidesToRender}
          </div>
        </div>

        <div className="right-arrow">
          <button id="nextBtn">&#8594;</button>
        </div>
      </div>
    </>
  );
}

export default Slider;
