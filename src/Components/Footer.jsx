import { Link } from "react-router-dom";
import "../Styles/Global.css";

import { SlSocialPintarest } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdLocalPhone,
  MdEmail,
  MdOutlineFacebook,
  MdDateRange,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import CityBoard from "../Assets/svgs/CityBoard.svg";

function Footer(params) {
  return (
    <div className="Footer">
      <div className="Text">
        <ul>
          <h1>
            {" "}
            <img src={CityBoard} alt="" srcset="" /> CityBoard
          </h1>
          <li>
            <i>
              <MdLocalPhone />{" "}
            </i>
            <div className="text">
              <p>Phone Number</p>
              <a href="">+91 1212121212</a>
            </div>
          </li>
          <li>
            <i>
              <MdEmail />
            </i>
            <div className="text">
              <p>Email</p>
              <a href="">Adcd@gamil.com</a>
            </div>
          </li>
          <li>
            <i>
              <MdOutlineFacebook />
            </i>
            <i>
              <FaXTwitter />
            </i>
            <i>
              <FaLinkedin />
            </i>
            <i>
              <SlSocialPintarest />
            </i>
          </li>
        </ul>
        <ul>
          <h1>About</h1>
          <li>
            <a href="">Leadership</a>
          </li>
          <li>
            <a href="">Diversity</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
          <li>
            <a href="">Esg</a>
          </li>
          <li>
            <a href="">Social Responsibility</a>
          </li>
        </ul>
        <ul>
          <h1>Investor</h1>
          <li>
            <a href="">Stock Info</a>
          </li>
          <li>
            <a href="">Financial</a>
          </li>
          <li>
            <a href="">Governance</a>
          </li>
          <li>
            <a href="">Newsroom</a>
          </li>
        </ul>
        <ul>
          <h1>Recent News</h1>

          <li className="News">
            <div className="date">
              <MdDateRange /> Jan 10, 2022
            </div>
            <h1>Where the Beat Meets business</h1>
          </li>
          <li className="News">
            <div className="date">
              {" "}
              <MdDateRange /> Jan 10, 2022
            </div>
            <h1>Where the Beat Meets business</h1>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="aside">
          <p>@ website 2004 | All Rights Reserved</p>
        </div>
        <ul>
          <li>
            <a href="">Trams & Condition</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
