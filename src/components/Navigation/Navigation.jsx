import React from 'react';
import './Navigation.css';

function Navigation() {
  // Store navigation link data in an array for dynamic rendering
  const navigationLinks = [
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navigation">
      {navigationLinks.map((link, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={index} className="navigation__link" href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
