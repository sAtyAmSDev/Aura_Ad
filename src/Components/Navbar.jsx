import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import "../Styles/Global.css"
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="" className="Logo" srcset="" />

        <ul className="navbarUL">
          <li className="nav-item">
            <Link className="nav-link NavActive" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/aboutUs">
              About us
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/career">
              Career
            </Link>
          </li>
        </ul>

        <button className="NavBtn btn-outline-success" type="submit">
          <span>Free</span> Ad Strategy <FaArrowRight />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
