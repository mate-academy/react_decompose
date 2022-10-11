import React from 'react';
import NavigationLink from './NavigationLink/NavigationLink';

import './Navigation.css';

function Navigation() {
  const arr = [
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className="navigation">
      {arr.map(el => <NavigationLink {...el} />)}
    </nav>
  );
}

export default Navigation;
