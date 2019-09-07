import React from 'react';
import './NavigationLink.scss';

const navigationList = [
  'About',
  'Services',
  'Contact',
];

const NavigationLink = () => {
  return (
    navigationList
      .map(item => <a className="navigation__link" href="#">{item}</a>)
  );
};

export default NavigationLink;
