import React from "react";

import "../Styles/Main.css";
import { FaArrowRight } from "react-icons/fa";
import BackgroundGetTouch from "../Assets/svgs/BackgroundGetTouch.svg";

function GetInTouchSection() {
  return (
    <>
      <div className="GetInTouch">
        <div className="Image"></div>
        <form>
          <h1>Get In Touch</h1>
          <div className="text">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="text">
          <input type="number" placeholder="Your Number" />
          <select name="" id="">
            <option value="">About</option>
            <option value="">Home</option>
            <option value="">Service</option>
          </select>
          </div>
          <textarea
            name=""
            className="MessageArea"
            placeholder="Message Here.."
          ></textarea>
          <button>
            Send Now
            <i>
              <FaArrowRight />
            </i>
          </button>
        </form>
        <img src={BackgroundGetTouch} alt="" />
        <div className="OverLapCounter">
          <div className="text">
            <h1>200+</h1>
            <p>Canvases</p>
          </div>
          <div className="border"></div>

          <div className="text">
            <h1>20M+</h1>
            <p>Weekly Impressions</p>
          </div>
          <div className="border"></div>
          <div className="text">
            <h1>200K+</h1>
            <p>Creatives</p>
          </div>
          <div className="border"></div>

          <div className="text">
            <h1>500+</h1>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouchSection;
