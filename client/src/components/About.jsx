import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About <span>MechChat'26</span></h2>

      <p style={{ marginTop: "20px", opacity: "0.7", maxWidth: "800px", marginInline: "auto" }}>
        MechChat'26 is a National Level Technical Symposium organized by the Department of Mechanical Engineering...
      </p>

      <div className="card-container">
        <div className="card">
          <h3>Innovation</h3>
          <p>Pushing boundaries through cutting-edge technology.</p>
        </div>

        <div className="card">
          <h3>Knowledge</h3>
          <p>A platform to learn and showcase your technical skills.</p>
        </div>

        <div className="card">
          <h3>Networking</h3>
          <p>Connect with brilliant minds across the nation.</p>
        </div>
      </div>
    </section>
  );
}
