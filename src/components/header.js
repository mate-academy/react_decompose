import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{props.siteName}</h1>
      <Navigation />
    </header>
  );
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Header;
