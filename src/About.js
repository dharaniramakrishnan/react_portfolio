import React from 'react';
import './About.css';
import profileImage from './dharu.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <section id="about">
      <img src={profileImage} alt="Dharani R" className="profile-image" />
      <h2>About Me</h2>
      <h1>I'm Dharani R.</h1>
      <p>I am a Full-Stack Developer with a passion for building efficient and user-friendly applications. My expertise lies in both front-end and back-end development, allowing me to create seamless experiences for users</p>
      <ul>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>Angular</li> 
        <li>Bootstrap</li>
      </ul>
    </section>
  );
};

export default About;
