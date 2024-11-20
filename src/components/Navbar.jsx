import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../images/logo.png";
import { links } from "../data";

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  // Close the nav menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navContainer = document.querySelector(".nav-container");
      

      // If the click was outside the nav container, close the menu
      if (navContainer && !navContainer.contains(event.target)) {
        setIsNavShowing(false);
      }
    };

    // Add event listener to detect clicks outside of nav
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


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
                onClick={() => setIsNavShowing(false)} // Close the nav menu on link click
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
