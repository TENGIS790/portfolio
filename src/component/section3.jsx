// src/components/Performance.js
import React from "react";
import "../styles/Performance.css";
import zurag from "../assets/zurag.png"; // ensure image is in assets folder

const Performance = () => {
  const items = [
    "Fast rendering and efficient performance using modern React techniques.",
    "Optimized components with reusable code and minimal re-renders.",
    "Responsive design and accessibility-first layout for all users.",
  ];

  return (
    <section
      className="performance-section"
      style={{ backgroundImage: `url(${zurag})` }}
    >
      <div className="performance-content">
        <h1 className="performance-title">Performance</h1>
        <div className="card-container">
          {items.map((text, index) => (
            <div key={index} className="glass-card">
              <p className="card-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;


