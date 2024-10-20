import React, { useState } from "react";

import {
  MdLocalPhone,
  MdDesignServices,
  MdLaptopChromebook,
  MdGraphicEq,
  MdOutlineVideoSettings,
} from "react-icons/md";

import "../Styles/Main.css";
import play from "../Assets/svgs/play.svg";

function ServicesSection() {


  return (
    <>
      <div className="ServicesSection">
        <div className="BackgroundImage"></div>
        <div className="ServicesSectionBox">
          <div className="ServicesTextSide">
            <div className="text">
              <h2>
                Services We <span>Provide</span>
              </h2>
              <p>
                We offer a wide range of design services to meet all your
                creative needs:
              </p>

              <button className="btn btn-outline-success" type="submit">
                Schedule Call <MdLocalPhone />
              </button>
            </div>

            <div className="ServicesVideo">
              <p>
                <div className="Border"></div>Drive More Traffic and Sales{" "}
              </p>
              <h1>Drive more traffic and product sales</h1>
              <img src={play} alt="" srcset="" className="ServicesVideoIcon" />
            </div>
          </div>

          <div className="CardSection">
            <div id="Active" className="ServicesCardProduct">
              <span>
                <MdDesignServices />
              </span>
              <h3>Social Media Design</h3>
              <p>
                Creating user interfaces and experiences that are intuitive and
                engaging.
              </p>
            </div>
            <div className="ServicesCardProduct">
              <span>
                <MdLaptopChromebook />
              </span>
              <h3>Optimized UI/UX Design for Digital Products</h3>
              <p>
                Creating user interfaces and experiences that are intuitive and
                engaging.
              </p>
            </div>
            <div className="ServicesCardProduct">
              <span>
                <MdGraphicEq />
              </span>
              <h3>Graphic Design for Branding</h3>
              <p>
                Creating eye-catching graphics your brand identity and attract
                your target audience.
              </p>
            </div>
            <div className="ServicesCardProduct">
              <span>
                <MdOutlineVideoSettings />
              </span>
              <h3>Video Production and Editing</h3>
              <p>
                Producing high-quality videos that tell your brand story and
                engage your audience.
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
