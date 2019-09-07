import React from 'react';
import './NavigationLink.scss';

const NavigationLink = ({ navItem }) => {
  return (
    navItem.map(item => (
      <a className="navigation__link" href={item.href}>{item.name}</a>
    ))
  );
};

export default NavigationLink;
