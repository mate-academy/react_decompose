import React from 'react';

function NavigationLink({ href, text }) {
  return (
    <a className="navigation__link" href={href}>{text}</a>
  );
}

export default NavigationLink;
