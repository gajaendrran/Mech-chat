import React, { useEffect, useState } from "react";
import "../style/crew.css";
import sec from '../images/manoj_sec.png'
import con from '../images/sivalakshmi-con.png'
import org from '../images/gowtham_org.png'
import hod from '../images/balusamy_hod.png'
import trea from '../images/baraniraj_trea.png'
import cordi from '../images/ramani_cordi.png'
import cosec  from '../images/santhiya-sec.png'

const staff = [
  { name: "Dr.T.Balusmy", role: "HOD", image: hod, delay: 0.1 },
  { name: "Dr.A.Baraniraj", role: "Treasurer", image: trea, delay: 0.2 },
  { name: "Dr.S.Sivalakshmi", role: "Convenor", image: con, delay: 0.3 },
];

const students = [
  { name: "Mr.M.Manoj", role: "Secretary", image: sec, delay: 0.1 },
  { name: "Ms.S.Santhya", role: "Co-Secretary", image: cosec, delay: 0.2 },
  { name: "Mr.G.Ramanidharan", role: "Student Co-ordinator", image: cordi, delay: 0.3 },
  { name: "Mr.S.Gowtham", role: "Function Organizer", image: org, delay: 0.4 },
];

export default function Crew() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`crew-page ${visible ? 'visible' : ''}`}>
      {/* Grid background */}
      <div className="grid-background"></div>
      
      {/* Decorative elements */}
      <div className="decorative-elements">
        <div className="crew-line line-1"></div>
        <div className="crew-line line-2"></div>
        <div className="hexagon hexagon-1"></div>
        <div className="hexagon hexagon-2"></div>
      </div>

      <div className="content-container">
        <h2 className="crew-title">OUR <span>CREW</span></h2>

        {/* STAFF */}
        <section className="crew-section">
          <h2 className="crew-section-heading">Leadership Panel</h2>
          <div className="crew-row staff-row">
            {staff.map((member, index) => (
              <div 
                className={`crew-member staff animated ${visible ? 'fade-in' : ''}`} 
                key={index}
                style={{ animationDelay: `${member.delay}s` }}
              >
                <div className="profile-container">
                  <div className="profile-img">
                    <img src={member.image} alt={member.name} />
                    <div className="profile-glow"></div>
                    <div className="profile-border"></div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STUDENTS */}
        <section className="crew-section">
          <h2 className="crew-section-heading">Organizing Committee</h2>
          <div className="crew-row student-row">
            {students.map((member, index) => (
              <div 
                className={`crew-member animated ${visible ? 'fade-in' : ''}`} 
                key={index}
                style={{ animationDelay: `${0.5 + member.delay}s` }}
              >
                <div className="profile-container">
                  <div className="profile-img">
                    <img src={member.image} alt={member.name} />
                    <div className="profile-glow"></div>
                    <div className="profile-border"></div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}