import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Site Name</h1>
      <nav className="navigation">
        <a className="navigation__link" href="#">About</a>
        <a className="navigation__link" href="#">Services</a>
        <a className="navigation__link" href="#">Contact</a>
      </nav>
    </footer>
  );
}

export default Footer;
