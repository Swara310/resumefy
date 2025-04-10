import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { io } from 'socket.io-client';
import Swal from 'sweetalert2'; // Import SweetAlert
import '../styles/Contact.css';
import {url} from '../api/apiendpoint';
const socket = io(url); // Adjust if your server is hosted elsewhere

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url+'/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire("Success", data.message, "success"); // Success SweetAlert
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        Swal.fire("Error", 'Error: ' + data.message, "error"); // Error SweetAlert
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire("Error", "Error submitting form", "error"); // General error SweetAlert
    }
  };

  // Optional: Listen for new contact submissions
  useEffect(() => {
    socket.on('newContact', (data) => {
      console.log('New contact submitted:', data);
      // Here you can handle new contact notifications
    });

    return () => {
      socket.off('newContact'); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
      <div className="contact-details">
        <div className="contact-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p>1234 Street Address, City, State, Zip</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>contact@example.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
