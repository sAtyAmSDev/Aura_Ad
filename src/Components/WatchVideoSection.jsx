
import React from "react";


import "../Styles/Main.css";

import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import BgImg from "../Assets/Image/WatchVideoSection.png"


function WatchVideoSection() {
  return (
    <>
   <div className="WatchVideoSection">
        <div className="main">
        
          <div className="text">
            <img src={BgImg} alt="" srcset="" className="BgImg"/>
            <p>Watch Some Video</p>
            <h1>Your Brand with Billboard</h1>
            <p>
              Billboard Advertising Ia A Poweful Marketing Tool That He
              Businesses Gain Visibility And Reach
            </p>
            <button className="WatchVideoBtn btn-outline-success" type="submit">
              <span>Free</span> Ad Strategy <FaArrowRight />
            </button>
          </div>
          <div className="Video">

          <button><MdPlayArrow />
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchVideoSection;
