import React from 'react';

const about = 'About';
const services = 'Secrvices';
const contact = 'Contact';

function Navigator() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">{about}</a>
      <a className="navigation__link" href="#services">{services}</a>
      <a className="navigation__link" href="#contact">{contact}</a>
    </nav>
  );
}

export default Navigator;
