import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" className="logo" />
        </Link>

        <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)} // Close the nav menu on click
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-btn">
          <button
            className="nav-toggle-btn"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <IoCloseSharp /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
