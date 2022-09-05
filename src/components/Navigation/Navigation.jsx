import React from 'react';
import './Navigation.css';

const links = [
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#services',
    label: 'Services',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

function Navigation() {
  return (
    <nav className="navigation">
      {links.map(link => (
        <a
          className="navigation__link"
          key={link.href}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
