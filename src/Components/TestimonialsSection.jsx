import React, { useState, useEffect } from "react";
import "../Styles/Main.css";
import DoubleClick from "../Assets/svgs/DoubleClick.svg";
import User from "../Assets/Image/User.jpg";

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Jang Wonyoung",
      location: "Pune",
      feedback:
        "We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions",
      imgSrc: DoubleClick,
    },
    {
      name: "Jennie Kim",
      location: "USA",
      feedback:
        "We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions",
      imgSrc: DoubleClick,
    },
    {
      name: "Lisa Manoban",
      location: "Thailand",
      feedback:
        "The service was fantastic! I am really happy with the support I received. Great experience overall.",
      imgSrc: DoubleClick,
    },
    {
      name: "Kim Taehyung",
      location: "South Korea",
      feedback:
        "Truly exceptional service. The team was very responsive and professional. Would recommend!",
      imgSrc: DoubleClick,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(interval); 
  }, [reviews.length]);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="TestimonialsSection">
        <div className="MainCard">
          <div className="box"></div>
          <div className="text">
            <p>Testimonials</p>
            <h1>
              <span>500+</span> Happy Clients Said To US They Are Satisfied
            </h1>
          </div>
        </div>

        <div className="ReviewBox">
          {reviews.map((review, index) => (
            <div
              className={`Review ${index === activeIndex ? "active" : ""}`}
              key={index}
              style={{ display: index === activeIndex ? "flex" : "none" }}
            >
              <img src={review.imgSrc} alt="DoubleClick" />
              <p>{review.feedback}</p>
              <div className="border"></div>
              <div className="User">
                <img src={User} alt="User" />
                <div className="Name">
                  <h1>{review.name}</h1>
                  <p>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ButtonScroll">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`Circle ${index === activeIndex ? "Active" : ""}`}
              onClick={() => handleCircleClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialsSection;
