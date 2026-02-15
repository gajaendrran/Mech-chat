import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import {
  FaFileAlt,
  FaQuestionCircle,
  FaPuzzlePiece,
  FaDraftingCompass,
  FaTools,
  FaFire,
  FaMapMarkedAlt,
  FaCamera,
  FaStopwatch,
  FaPalette,
  FaLaughSquint,
} from "react-icons/fa";
import "../style/event.css";
import "../style/confirmDialogue.css";

export default function EventsSection() {
  const [activeTech, setActiveTech] = useState(null);
  const [activeNonTech, setActiveNonTech] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1200,
      easing: "ease-in-out",
      reset: false,
    });

    sr.reveal(".events-subtitle", { origin: "top", delay: 200 });
    sr.reveal(".events-title", { origin: "bottom", delay: 300 });

    sr.reveal(".section-heading", { origin: "left", delay: 200 });

    sr.reveal(".tech-grid .event-card", {
      origin: "left",
      interval: 150,
    });

    sr.reveal(".nontech-grid .event-card", {
      origin: "right",
      interval: 150,
    });

    sr.reveal("#btn", {
      origin: "bottom",
      delay: 300,
    });
  }, []);

  const techEvents = [
    {
      title: "Paper Presentation",
      icon: FaFileAlt,
      short: "Showcase research in Mechanical domains.",
      full: "Participants present research papers in Design, Thermal, and Manufacturing domains before expert judges. Evaluation focuses on content clarity, originality, and presentation skills.",
    },
    {
      title: "Technical Quiz",
      icon: FaQuestionCircle,
      short: "Test your fundamental knowledge.",
      full: "Round 1 – Basics Round: Core engineering concepts tested.\nRound 2 – Self-Buzzer Round: Fast-paced challenge testing depth of knowledge and quick thinking.",
    },
    {
      title: "Mech Bermuda",
      icon: FaPuzzlePiece,
      short: "Analytical and logic-based challenge.",
      full: "Round 1 – Logo Identification: Identify logos of various companies.\nRound 2 – Connection Round (Buzzer): Find connections between clues. Evaluates observation skills, logical thinking, and response speed.",
    },
    {
      title: "CAD Modelling",
      icon: FaDraftingCompass,
      short: "Design 3D mechanical components.",
      full: "Round 1 – Engineering Graphics Quiz: Tests visualization and drawing principles.\nRound 2 – Design Challenge (CATIA): Participants create a model in CATIA. Judging focuses on accuracy, dimensions, completeness, and design approach.",
    },
    {
      title: "Mr. Lathe",
      icon: FaTools,
      short: "Show precision machining skills.",
      full: "Round 1 – Manufacturing Quiz: Tests theoretical knowledge of manufacturing processes.\nRound 2 – Practical Machining: Perform a specific machining operation. Evaluation based on accuracy, surface finish, precision, and safety.",
    },
    {
      title: "Welding",
      icon: FaFire,
      short: "Demonstrate fabrication expertise.",
      full: "Round 1 – Welding Theory Test: Conceptual clarity on processes, joints, safety, and applications.\nRound 2 – Practical Welding Task: Perform welding operation. Judging based on joint quality, bead appearance, alignment, and safety adherence.",
    },
  ];

  const nonTechEvents = [
    {
      title: "Photography",
      icon: FaCamera,
      short: "Capture mechanical engineering creatively.",
      full: "Participants capture meaningful photographs related to mechanical engineering. Evaluation based on creativity, clarity, relevance to theme, and visual storytelling.",
    },
    {
      title: "Poster Making",
      icon: FaPalette,
      short: "Visual representation of MEKCHAT 26.0.",
      full: "Participants design posters creatively representing the theme of MEKCHAT 26.0. Judging focuses on originality, creativity, clarity of message, and visual appeal.",
    },
    {
      title: "Meme Creation",
      icon: FaLaughSquint,
      short: "Humor meets mechanical engineering.",
      full: "Create humorous and relatable memes based on mechanical engineering concepts or student life. Judging focuses on creativity, originality, relevance, and humor.",
    },
    {
      title: "Minute To Win It",
      icon: FaStopwatch,
      short: "Fun one-minute talent challenges.",
      full: "Participants showcase a talent in one minute. Can include singing, mimicry, storytelling, or quick challenges. Judging based on confidence, creativity, and entertainment value.",
    },
    {
      title: "Treasure Hunt",
      icon: FaMapMarkedAlt,
      short: "Campus-wide clue-solving adventure.",
      full: "Solve clever clues hidden across the campus. Each clue leads to the next, with the final clue leading to the grand treasure. Evaluates teamwork, logic, and speed. First team to reach the treasure wins.",
    },
  ];

  const toggleTech = (index) => {
    setActiveTech(activeTech === index ? null : index);
  };

  const toggleNonTech = (index) => {
    setActiveNonTech(activeNonTech === index ? null : index);
  };

  const renderCard = (event, index, active, toggleFn) => {
    const Icon = event.icon;
    return (
      <div
        key={index}
        className={`event-card ${active === index ? "active" : ""}`}
        onClick={() => toggleFn(index)}
      >
        <div className="card-header">
          <div className="left-content">
            <div className="icon-box">
              <Icon />
            </div>
          </div>
          <FaChevronDown
            className={`arrow ${active === index ? "rotate" : ""}`}
          />
        </div>
        <h4>{event.title}</h4>
        <p className="short-text">{event.short}</p>
        <div className={`expand-content ${active === index ? "show" : ""}`}>
          <hr />
          <p>{event.full}</p>
        </div>
      </div>
    );
  };

  const handleRegisterClick = () => {
    setShowModal(true); // open modal
  };

  const handleConfirm = () => {
    // Navigate to Google Form on confirm
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfgXSKkNIrGmA8uT2EDV5QnQv-7q32DiY8OphkxMlhl_21R-g/viewform?usp=publish-editor",
      "_blank",
    );
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);

  return (
    <section className="events" id="events">
      <div>
        <h5 className="events-subtitle">WHAT'S IN OUR STORE</h5>
        <h2 className="events-title">
          Our <span>Events</span>
        </h2>
      </div>

      <h2 className="section-heading">
        <span className="line"></span>Technical Events
      </h2>
      <div className="tech-grid">
        {techEvents.map((event, index) =>
          renderCard(event, index, activeTech, toggleTech),
        )}
      </div>

      <h2 className="section-heading">
        <span className="line"></span>Non-Technical Events
      </h2>
      <div className="nontech-grid">
        {nonTechEvents.map((event, index) =>
          renderCard(event, index, activeNonTech, toggleNonTech),
        )}
      </div>

      <div id="btn">
        <button className="btn btn-outline" onClick={handleRegisterClick}>
          REGISTER
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Rules & Regulations</h3>
            <ul>
              <li>
                All participants must carry their valid College ID Card for
                entry and verification purposes.
              </li>
              <li>
                Participants are advised to keep their payment Transaction ID
                safely for registration confirmation and future reference.
              </li>
            </ul>
            <div className="modal-buttons">
              <button className="btn btn-outline" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleConfirm}>
                Confirm & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
