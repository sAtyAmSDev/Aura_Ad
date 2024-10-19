import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import BoxImg from "../Assets/Image/Rectangle 3342.jpg";


import "../Styles/Main.css";

function CaseStudies() {
  return (
    <>
      <div className="CaseStudies">
        <div className="text">
          <p>CASE STUDIES</p>
          <div className="H1Title">
          <h1>Where the Beat Meets Business Billboard</h1>
<h1>{" "}</h1>
          </div>
        </div>
        <div className="CaseStudiesCards">
          <div className="StudiesProduct">
            <img src={BoxImg} alt="" srcset="" />
            <div className="text">
              <p className="AdsBrand"> <MdDateRange /> Google Ads</p>
              <h3>Innovate Create Inspire your brand to life in</h3>
              <p>
                Creating eye-catching graphics your brand identity and attract
                your target audience.
              </p>
              <button>
                Read More <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="StudiesProduct">
            <img src={BoxImg} alt="" srcset="" />
            <div className="text">
              <p className="AdsBrand"><MdDateRange /> Facebook Ads</p>
              <h3>Services Does Your Billboard Company Offer</h3>
              <p>
                Creating eye-catching graphics your brand identity and attract
                your target audience.
              </p>
              <button>
                Read More <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="StudiesProduct">
            <img src={BoxImg} alt="" srcset="" />
            <div className="text">
              <p className="AdsBrand"><MdDateRange /> May 19, 2023</p>
              <h3>Types Of Billboards Do You Have Available</h3>
              <p>
                Creating eye-catching graphics your brand identity and attract
                your target audience.
              </p>
              <button>
                Read More <FaArrowRight />
              </button>
            </div>
          </div>

     
        </div>
      </div>
    </>
  );
}

export default CaseStudies;
