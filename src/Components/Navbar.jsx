import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import "../Styles/Global.css";
import { FaArrowRight } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" className="Logo" />

        <ul className={`navbarUL ${isMenuOpen ? "NavActive" : ""}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service" onClick={toggleMenu}>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources" onClick={toggleMenu}>
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutUs" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career" onClick={toggleMenu}>
              Career
            </Link>
          </li>

          <li className="nav-item mobile-btn">
            <button className="NavBtnMobile" type="submit">
              <span>Free</span> Ad Strategy <FaArrowRight />
            </button>
          </li>
        </ul>

        <button className="NavBtn" type="submit">
          <span>Free</span> Ad Strategy <FaArrowRight />
        </button>

        <div className="NavIcon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
