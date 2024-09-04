// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>College Management System</h3>
        <p>
          Developed a comprehensive College Management System using Angular. This project includes features such as student enrollment, course management, and faculty management. The system is designed to streamline the administrative tasks of a college and enhance the overall efficiency.
        </p>
      </div>
      <div className="project">
        <h3>Student Management System</h3>
        <p>
          Created a Student Management System using MongoDB for backend data management. The application allows users to create, add, delete, and update student records. It provides a user-friendly interface for managing student information and integrates CRUD (Create, Read, Update, Delete) operations efficiently.
        </p>
      </div>
    </section>
  );
};

export default Projects;
