import React from 'react';
import './Navigation.css';

function Navigation() {
  const mainTopics = {
    products: 'Products',
    contact: 'Contact',
    aboutUs: 'About Us',
  };

  return (
    <nav className="navigation">
      <a className="navigation__link" href="#products">{mainTopics.products}</a>
      <a className="navigation__link" href="#contact">{mainTopics.contact}</a>
      <a className="navigation__link" href="#aboutUs">{mainTopics.aboutUs}</a>
    </nav>
  );
}

export default Navigation;
