import React from "react";

import { FaArrowRight, FaCircle, FaPlusCircle } from "react-icons/fa";
import "../Styles/Main.css";

function WhyChoseUsSection() {
  return (
    <div className="WhyChoseSection">
      <div className="ImageCard">
        <div className="BackBox">
          <div className="FrontBox">
            <div className="MetaCampaigns">
              <h3>
                920<span>+</span>
              </h3>
              <p>Meta campaigns launched</p>
              <button>
                <p>10k + Client</p>{" "}
                <div className="Circle">
                  <i>
                    <FaCircle />
                  </i>
                  <i>
                    <FaCircle />
                  </i>
                  <i>
                    {" "}
                    <FaCircle />
                  </i>
                  <i>
                    <FaPlusCircle />
                  </i>
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="TextCard">
        <h2>WHY CHOSE US</h2>
        <h1>The digi cybsecure The transfor billbord </h1>
        <p>
          Billboard advertising is a powerful marketing tool that he businesses
          gain visibility and reach their target audience Billboard advertising
          is a powerful marketing tool that he businesses Billboard advertising
          is a powerful marketing tool that he businesses gain visibility and
          reach their target 920+ audience Billboard{" "}
        </p>
        <button>
          Read More{" "}
          <i>
            <FaArrowRight />
          </i>
        </button>
      </div>
    </div>
  );
}

export default WhyChoseUsSection;
