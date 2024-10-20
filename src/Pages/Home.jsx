import React, { useState } from "react";

import {
  MdLocalPhone,
  MdArrowForwardIos,
  MdArrowBackIosNew,
} from "react-icons/md";
import {  FaArrowRight } from "react-icons/fa";

import "../Styles/Home.css";

import HeroImage from "../Assets/HeroSection.svg";
import Google from "../Assets/svgs/Google.svg";
import Youtube from "../Assets/svgs/Youtube.svg";
import Facebook from "../Assets/svgs/Facebook.svg";


import ServicesSection from "../Components/ServicesSection";
import CaseStudies from "../Components/CaseStudies";
import WhyChoseUsSection from "../Components/WhyChoseUsSection";
import ResultDriveSection from "../Components/ResultDriveSection";
import WhoWeAreSection from "../Components/WhoWeAreSection";
import WatchVideoSection from "../Components/WatchVideoSection";
import ExamplesSection from "../Components/ExamplesSection";
import OurBlogsSection from "../Components/OurBlogsSection";
import GetInTouchSection from "../Components/GetInTouchSection";
import TestimonialsSection from "../Components/TestimonialsSection";

function Home() {
  const [activeCard, setActiveCard] = useState(0);

  const helplineCards = [
    {
      id: 1,
      number: "+91 1234567890",
      text: "Need Help",
    },
    {
      id: 2,
      number: "+91 9876543210",
      text: "Support",
    },
  ];

  const handleNext = () => {
    setActiveCard((prev) => (prev === helplineCards.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev === 0 ? helplineCards.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="MainSection">
        <div className="HeroSection">
          <div className="HeroText">
            <h1 className="Title">
              UNLOCK NOW THE BUSINESS{" "}
              <span className="TitleMid">billboard</span> BRILLIANCE
            </h1>
            <p>
              <span className="TitleClients">500+</span> Happy Clients
            </p>
            <p className="TitleP">
              Billboard advertising is a powerful marketing tool that he
              businesses gain visibility and reach their target audience
            </p>
            <button className="HeroBtn btn-outline-success" type="submit">
              Free Ad Strategy <FaArrowRight />
            </button>
          </div>

          <div className="HeroImg">
            <img src={HeroImage} alt="Hero" />
            <div className="HelplineCard">
              <div className="HelplineCardBox">
                {helplineCards.map((card, index) => (
                  <div
                    className={`HelplineCardText ${
                      index === activeCard ? "active" : "inactive"
                    }`}
                    key={card.id}
                  >
                    <div className="textIcon">
                      <MdLocalPhone />
                    </div>
                    <div className="HelplineTextBox">
                      <p className="HelplineText">{card.text}</p>
                      <p className="HelplineNumber">{card.number}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="HelplineCardIcon">
                <button
                  className="BackwardIcon"
                  onClick={handlePrev}
                  aria-label="Previous helpline"
                >
                  <MdArrowBackIosNew />
                </button>
                <button
                  className="ForwardIcon"
                  onClick={handleNext}
                  aria-label="Next helpline"
                >
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="PartnerBrand">
          <span>Official Partner With</span>
          <div className="brand">
           <img src={Google} alt="Google" />
           <img src={Youtube } alt="Youtube" />
           <img src={Facebook } alt="Facebook" />
          </div>
        </div>
      </div>

      <ServicesSection />

      <CaseStudies />

      <WhyChoseUsSection />

      <ResultDriveSection />

      <WhoWeAreSection />

      <WatchVideoSection />

      <ExamplesSection />

      <OurBlogsSection />

      <GetInTouchSection />

      <TestimonialsSection />
    </>
  );
}

export default Home;
