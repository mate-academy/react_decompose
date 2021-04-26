import React from 'react';

let about = 'About';
let services = 'Secrvices';
let contact = 'Contact';

function Navigator() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">{about}</a>
      <a className="navigation__link" href="#services">{services}</a>
      <a className="navigation__link" href="#contact">{contact}</a>
    </nav>
  )
}



export default Navigator;
