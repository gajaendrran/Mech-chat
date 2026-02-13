import React from "react";
import '../style/eventcard.css'
export default function EventCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
