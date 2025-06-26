import React from 'react';
import './contact.css';

function Contact() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />

      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Enter your message"></textarea>

      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
