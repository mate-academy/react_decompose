import React from 'react';
import './NavigationLink.scss';

const NavigationLink = (props) => {
  return (
    props.navItem
      .map(item => (
        <a className="navigation__link" href={item.href}>
          {item.name}
        </a>
      ))
  );
};

export default NavigationLink;
