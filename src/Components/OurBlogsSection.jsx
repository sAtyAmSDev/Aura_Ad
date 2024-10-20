import { Link } from "react-router-dom";
import React from "react";
import "../Styles/Main.css";
import { FaArrowRight, FaCircle } from "react-icons/fa";
function OurBlogsSection() {
  return (
    <>
      <div className="OurBlogs">
        <p>OUR BLOGS</p>
        <h1>
          Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue
        </h1>
        <div className="BlogsCBox">
          <div className="BlogCard">
            <div className="Top">
              <div className="Status" style={{ color: "red" }}>
                <FaCircle />
              </div>
              <p className="Time">5 min read</p>
            </div>
            <h1>How a Digital Marketing Agency Can Boost Your Business</h1>
            <div className="description">
              <p>
                We are the top digital marketing agency for branding corp. We
                offer a full rang engine ....
              </p>
              <button style={{ color: "#FFF", backgroundColor: "#000" }}>
                <FaArrowRight />
              </button>
            </div>
          </div>{" "}
          <div className="BlogCard">
            <div className="Top">
              <div className="Status" style={{ color: "blue" }}>
                <FaCircle />
              </div>
              <p className="Time">5 min read</p>
            </div>
            <h1>How a Digital Marketing Agency Can Boost Your Business</h1>
            <div className="description">
              <p>
                We are the top digital marketing agency for branding corp. We
                offer a full rang engine ....
              </p>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>{" "}
          <div className="BlogCard">
            <div className="Top">
              <div className="Status" style={{ color: "green" }}>
                <FaCircle />
              </div>
              <p className="Time">5 min read</p>
            </div>
            <h1>How a Digital Marketing Agency Can Boost Your Business</h1>
            <div className="description">
              <p>
                We are the top digital marketing agency for branding corp. We
                offer a full rang engine ....
              </p>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <button>
          <Link to="/blogs">
            Read More{" "}
            <i>
              <FaArrowRight />
            </i>
          </Link>
        </button>
      </div>
    </>
  );
}

export default OurBlogsSection;
