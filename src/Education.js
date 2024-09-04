
// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>12th Grade</h3>
        <p>Percentage: 90.93%</p>
      </div>
      <div className="education-item">
        <h3>10th Grade</h3>
        <p>Percentage: 98.31%</p>
      </div>
      <div className="education-item">
        <h3>College</h3>
        <p>CGPA: 8.19</p>
      </div>
    </section>
  );
};

export default Education;
