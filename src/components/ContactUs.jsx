import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h2>📨 Contact Us</h2>
      <p>If you have any questions, feedback, or need support, feel free to reach out!</p>
      <ul>
        <li><strong>Email:</strong> support@memoflipgame.com</li>
        <li><strong>Phone:</strong> +1 (800) 123-4567</li>
      </ul>
      <p>We typically respond within 24–48 hours.</p>
    </div>
  );
}

export default ContactUs;
