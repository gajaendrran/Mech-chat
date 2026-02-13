import React from "react";
import '../style/contact.css';
export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact <span>Us</span></h2>

      <div className="contact-container">
        <div>
          <div className="contact-box">
            <h3>Venue</h3>
            <p>Department of Mechanical Engineering</p>
            <p>Your College Name, City - 600001</p>
          </div>

          <div className="contact-box" style={{ marginTop: "20px" }}>
            <h3>Email</h3>
            <p>mechchat26@college.edu</p>
          </div>
        </div>

        <div>
          <div className="contact-box">
            <h3>John Doe</h3>
            <p>Student Coordinator</p>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-box" style={{ marginTop: "20px" }}>
            <h3>Jane Smith</h3>
            <p>Student Coordinator</p>
            <p>+91 98765 43211</p>
          </div>
        </div>
      </div>

      <div className="footer">
        © 2026 Department of Mechanical Engineering. All rights reserved.
      </div>
    </section>
  );
}
