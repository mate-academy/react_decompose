import React from 'react';
import PropTypes from 'prop-types';

function Navigation() {
  return (
    <nav className="navigation">
      <NavigationLink text="About" />
      <NavigationLink text="Services" />
      <NavigationLink text="Contact" />
    </nav>
  );
}

const NavigationLink = props => (
  <a className="navigation__link" href={`#${props.text.toLowerCase()}`}>
    {props.text}
  </a>
);

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Navigation;
