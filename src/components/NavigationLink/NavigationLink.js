import React from 'react';
import './NavigationLink.scss';

const NavigationLink = ({ navItem }) => {
  return (
    navItem.map((item, i) => (
      <a key={item.name} className="navigation__link" href={item.href}>
        {item.name}
      </a>
    ))
  );
};

export default NavigationLink;
