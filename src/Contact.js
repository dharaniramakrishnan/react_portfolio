// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('dharanir.22it@kongu.edu', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <h3>Connect with me:</h3>
        <a href="https://www.linkedin.com/in/dharani-r-dharani-7025a3259/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://leetcode.com/u/IT_22ITR017/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
 
