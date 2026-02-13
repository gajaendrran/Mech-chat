import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../style/navbar.css';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          MECHCHAT<span>'26</span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>EVENTS</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
