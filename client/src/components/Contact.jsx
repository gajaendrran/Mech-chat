import React from "react";
import '../style/contact.css';
import { FaUserTie, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact <span>Us</span></h2>

      {/* First Row: Student Coordinators */}
      <div className="contact-container first-row">
        <a href="tel:+919342596841" className="contact-link">
          <div className="contact-box">
            <h3>Manoj M</h3>
            <p>Secretary <FaUserTie className="contact-icon" /></p>
            <p>+91 93425 96841</p>
          </div>
        </a>

        <a href="tel:+918300488027" className="contact-link">
          <div className="contact-box">
            <h3>Suryakanth SK</h3>
            <p>Workshop Incharge <FaUserTie className="contact-icon" /></p>
            <p>+91 83004 88027</p>
          </div>
        </a>

        <a href="tel:+919585657065" className="contact-link">
          <div className="contact-box">
            <h3>Kabilan</h3>
            <p>Events Incharge <FaUserTie className="contact-icon" /></p>
            <p>+91 95856 57065</p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/mekchat_26.0?igsh=MWxxcG1qdHVlNDFkdA=="
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <div className="contact-box">
            <h3>Instagram <FaInstagram className="contact-icon" /></h3>
            <p>@mechchat26</p>
          </div>
        </a>
      </div>

      {/* Second Row: Venue & Instagram */}
      <div className="contact-container second-row">
        <a
          href="https://maps.app.goo.gl/ACUQRpWnshUSZRv17?g_st=aw"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <div className="contact-box">
            <h3>Venue <FaMapMarkerAlt className="contact-icon" /></h3>
            <p>Department of Mechanical Engineering</p>
            <p>Government College Of Engineering, Salem - 11</p>
          </div>
        </a>
      </div>
      <div className="footer">
        © 2026 Department of Mechanical Engineering. All rights reserved.
      </div>
    </section>
  );
}
