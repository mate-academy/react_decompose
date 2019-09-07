import React from 'react';
import './NavigationLink.scss';

const navigationList = [
  {
    name: 'About', href: '#',
  },
  {
    name: 'Services', href: '#',
  },
  {
    name: 'Contact', href: '#',
  },
];

const NavigationLink = () => {
  return (
    navigationList
      .map(item =>
        <a className="navigation__link" href={item.href}>{item.name}</a>)
  );
};

export default NavigationLink;
