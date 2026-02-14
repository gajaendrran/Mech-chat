import React from "react";
import '../style/contact.css';
import { FaUserTie, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact <span>Us</span></h2>

      {/* First Row: Student Coordinators */}
      <div className="contact-container first-row">
        <a href="tel:+919876543210" className="contact-link">
          <div className="contact-box">
            <h3>Manoj M</h3>
            <p>Secretary <FaUserTie className="contact-icon" /></p>
            <p>+91 98765 43210</p>
          </div>
        </a>

        <a href="tel:+919876543211" className="contact-link">
          <div className="contact-box">
            <h3>Suryakanth SK</h3>
            <p>Workshop Incharge <FaUserTie className="contact-icon" /></p>
            <p>+91 98765 43211</p>
          </div>
        </a>

        <a href="tel:+919876543212" className="contact-link">
          <div className="contact-box">
            <h3>Kabilan</h3>
            <p>Events Incharge <FaUserTie className="contact-icon" /></p>
            <p>+91 98765 43212</p>
          </div>
        </a>

        <a
          href="https://instagram.com/mechchat26"
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
          href="https://www.google.com/maps/place/Government+College+Of+Engineering,+Salem"
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
