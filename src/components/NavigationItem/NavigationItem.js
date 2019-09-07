import React from 'react';
import './NavigationItem.css';

function NavigationItem(props) {
  return (
    <a className="navigation__link" href="#">{props.link}</a>
  );
}

export default NavigationItem;