import React from "react";

import "../Styles/Main.css";
import { FaCircle } from "react-icons/fa";

function ExamplesSection() {
  return (
    <>
      <div className="ExamplesSection">
        <h1>
          Real-world examples of how we have helped companies achieve their
          marketing objectives.
        </h1>
        <div className="buttonCard">
          <button className="active">All Work [20]</button>
          <button>UI/UX Design [10]</button>
          <button>Digital Marketing [5]</button>
          <button>Branding [5]</button>
        </div>
        <div className="CardBox">
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
        </div>
      </div>
    </>
  );
}

export default ExamplesSection;
