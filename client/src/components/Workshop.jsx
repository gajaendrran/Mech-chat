import React, { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChalkboardTeacher, FaIndustry, FaCogs, FaRobot, FaTools } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import "../style/workshop.css";

export default function Workshop() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const workshopDetails = {
    title: "Integrated Mechanical Innovation: From Tribology to Smart Manufacturing",
    description: "This comprehensive workshop bridges fundamental mechanical principles with cutting-edge Industry 4.0 technologies. Participants will gain hands-on experience in tribology, failure analysis, and smart manufacturing systems. The curriculum is designed by industry experts to provide practical knowledge applicable to real-world engineering challenges. Attendees will leave with actionable insights to optimize mechanical systems, implement predictive maintenance strategies, and leverage IoT for manufacturing efficiency.",
    highlights: " Open to ECE,EEE,MECH,PRODUCTION and AUTOMOBILE branches.\nThis workshop may help you gain a strong advantage in securing future placement opportunities!",
    tutor: {
      name: "K.Kumareshan",
      title: "CEO",
      company: "CMD Engineering Solutions",
      bio: "With over 15 years of industry experience, Kumaresh has led transformative projects across automotive and heavy machinery sectors. He specializes in predictive maintenance systems and smart factory implementations, having deployed solutions in 50+ manufacturing facilities across Asia. His research on tribology applications has been published in multiple international journals."
    },
    venue: "Mechanical Department, Seminar hall",
    date: "March 06, 2026",
    time: "10:00 AM ",
    price: "₹300"
  };

  const subtopics = [
    { id: 1, title: "Machine Elements & System Integration", icon: <FaCogs /> },
    { id: 2, title: "Friction, Wear & Industrial Lubrication (Tribology)", icon: <FaTools /> },
    { id: 3, title: "Bearing & Gear Failure Analysis", icon: <FaIndustry /> },
    { id: 4, title: "Sensors & Automation in Mechanical Systems", icon: <FaRobot /> },
    { id: 5, title: "Pneumatic and Hydraulic Control Applications", icon: <FaTools /> },
    { id: 6, title: "CNC & Smart Manufacturing Technologies", icon: <FaCogs /> },
    { id: 7, title: "IoT & Industry 4.0 in Production", icon: <FaIndustry /> },
    { id: 8, title: "Predictive Maintenance Techniques", icon: <FaRobot /> },
    { id: 9, title: "Surface Engineering & Coatings", icon: <FaTools /> },
    { id: 10, title: "Energy-Efficient Machine Design", icon: <FaIndustry /> }
  ];

  const handleRegisterClick = () => {
    setShowModal(true); // open modal
  };

  const handleConfirm = () => {
    // Navigate to Google Form on confirm
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScSUa5K1TCu3-GieMW2McYwZP1rLcObHKgm0Xy81uZ9PdCbqQ/viewform?usp=publish-editor", "_blank");
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);

  return (
    <section id="workshop" className="workshop-page">
      {/* Grid background */}
      <div className="grid-background"></div>

      <div className="workshop-container">
        <div className="workshop-header">
          <h2 className="events-title">
            Work <span>Shop</span>
          </h2>
          <h1 className="workshop-title">{workshopDetails.title}</h1>
          <div className="workshop-meta">
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />
              <span>{workshopDetails.date}</span>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt className="meta-icon" />
              <span>{workshopDetails.venue}</span>
            </div>
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{workshopDetails.time}</span>
            </div>
          </div>
        </div>

        <div className="workshop-content">
          <div className="workshop-description">
            <h2 className="section-title">Workshop Overview</h2>
            <p className="description-text">
              {workshopDetails.description}
            </p>
            <p className="placement-highlight">
              {workshopDetails.highlights}
            </p>
            <div className="tutor-section">
              <h3 className="tutor-title">Workshop Instructor</h3>
              <div className="tutor-card">
                <div className="tutor-avatar">
                  <FaChalkboardTeacher className="tutor-icon" />
                </div>
                <div className="tutor-info">
                  <h4 className="tutor-name">{workshopDetails.tutor.name}</h4>
                  <p className="tutor-position">{workshopDetails.tutor.title} at {workshopDetails.tutor.company}</p>
                  <p className="tutor-bio">{workshopDetails.tutor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="subtopics-section">
            <h2 className="section-title">Proposed Subtopics</h2>
            <div className="subtopics-grid">
              {subtopics.map((topic) => (
                <div className="subtopic-card" key={topic.id}>
                  <div className="subtopic-icon">{topic.icon}</div>
                  <h3 className="subtopic-title">{topic.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Simple price and register section */}
          <div className="workshop-footer">
            <div className="price-section">
              <span className="price-label">Workshop Fee:</span>
              <span className="price-amount">{workshopDetails.price}</span>
            </div>

            <button className="register-now-btn" onClick={handleRegisterClick}>Register Now</button>
          </div>
          {/* Accommodation Section */}
          <div id = "accommodation" className="accommodation-section">
            <h2 className="section-title">Accommodation Details – MEKCHAT Symposium</h2>

            <div className="acc-card">
              <h3>Combo Registration (Workshop + Events)</h3>
              <ul>
                <li>Access to both 2-Day Symposium Events</li>
                <li>FREE Accommodation</li>
                <li>2nd Day Non-Veg Lunch (Token Required)</li>
                <li>Eligible for Bulk Registration Special Offers</li>
                <li><strong>Best Value Option – Zero Accommodation Charges!</strong></li>
              </ul>
            </div>

            <div className="acc-card">
              <h3>Single Registration</h3>
              <p><strong>Workshop Only:</strong></p>
              <ul>
                <li>2nd Day Non-Veg Lunch Provided</li>
                <li>Accommodation <span className="pri">₹50</span> per day</li>
              </ul>

              <p><strong>Events Only:</strong></p>
              <ul>
                <li>Accommodation + Food <span className="pri">₹100</span> per day (Optional)</li>
              </ul>
            </div>

            <div className="acc-card">
              <h3>Bulk Registration Benefits</h3>
              <ul>
                <li>Special Discounted Offers Available</li>
                <li>Charges Negotiable for Bulk Participants</li>
              </ul>
            </div>
            <div className="acc-buttons">
              <button
                className="acc-btn query-btn"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 200);
                }}
              >
              For Queries ?
              </button>
              <button
                className="acc-btn accommodate-btn"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScMhJpIP4LRv1HoT9IcIW7AYtNhfhBXgxso2TKchNlVrwUXTg/viewform?usp=publish-editor", "_blank")}
              >
                Accommodate
              </button>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Rules & Regulations</h3>
                <ul>
                  <li>All participants must carry their valid College ID Card for entry and verification purposes.</li>
                  <li>Participants are advised to keep their payment Transaction ID safely for registration confirmation and future reference.</li>
                  <li>Workshop participants will be provided with complimentary accommodation and lunch as part of the symposium hospitality.</li>
                  <li>Enjoy a comfortable stay and lunch arrangements during your workshop participation at MEKCHAT 26.0.</li>
                </ul>
                <div className="modal-buttons">
                  <button className="btn btn-outline" onClick={handleCancel}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleConfirm}>Confirm & Proceed</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}