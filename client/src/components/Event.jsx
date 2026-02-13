import React from "react";
import EventCard from "./EventCard";
import '../style/event.css'
export default function Events() {

  const technicalEvents = [
    {
      title: "Paper Presentation",
      description: "Present innovative research papers on mechanical engineering topics."
    },
    {
      title: "CAD Modeling",
      description: "Design and model components using SolidWorks and related software."
    },
    {
      title: "Technical Quiz",
      description: "Test your technical knowledge across various domains."
    },
    {
      title: "Robo Wars",
      description: "Build and battle robots in an action-packed arena showdown."
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Poster Design",
      description: "Showcase creativity through innovative poster designs."
    },
    {
      title: "Extempore",
      description: "Speak confidently on surprise technical and general topics."
    },
    {
      title: "Gaming",
      description: "Compete in exciting multiplayer gaming competitions."
    },
    {
      title: "Photography",
      description: "Capture the best moments and express your perspective."
    }
  ];

  return (
    <section id="events" className="section">
      <h2>Our <span>Events</span></h2>

      <h3 style={{ marginTop: "60px", color: "#ff6a00" }}>
        Technical Events
      </h3>

      <div className="card-container">
        {technicalEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>

      <h3 style={{ marginTop: "80px", color: "#ff6a00" }}>
        Non-Technical Events
      </h3>

      <div className="card-container">
        {nonTechnicalEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
}
