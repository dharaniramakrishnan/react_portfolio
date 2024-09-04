// src/components/Papers.js
import React from 'react';
import './Papers.css';

const Papers = () => {
  return (
    <section id="papers">
      <h2>Papers Presented</h2>
      <div className="paper-item">
        <h3>Extended Reality</h3>
        <p>Presented at Coimbatore Institute of Technology.</p>
      </div>
      <div className="paper-item">
        <h3>IoT-based Electricity</h3>
        <p>Presented at Madras Institute of Technology.</p>
      </div>
    </section>
  );
};

export default Papers;
