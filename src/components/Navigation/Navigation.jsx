import React from 'react';
import './Navigation.css';

function Navigation() {
  const maneTopics = {
    products: 'Products',
    contact: 'Contact',
    aboutUs: 'About Us',
  };

  return (
    <nav className="navigation">
      <a className="navigation__link" href="#products">{maneTopics.products}</a>
      <a className="navigation__link" href="#contact">{maneTopics.contact}</a>
      <a className="navigation__link" href="#aboutUs">{maneTopics.aboutUs}</a>
    </nav>
  );
}

export default Navigation;
