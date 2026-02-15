import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "../style/navbar.css";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          MEKCHAT<span>'26</span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            <span onClick={() => handleScroll("home")}>HOME</span>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <span onClick={() => handleScroll("about")}>ABOUT</span>
          </a>
          <a href="#events" onClick={() => setMenuOpen(false)}>
            <span onClick={() => handleScroll("events")}>EVENTS</span>
          </a>
          <Link to="/workshop" onClick={() => setMenuOpen(false)}>
            WORKSHOP
          </Link>

          <Link to="/crew" onClick={() => setMenuOpen(false)}>
            CREW
          </Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span onClick={() => handleScroll("contact")}>CONTACT</span>
          </a>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
