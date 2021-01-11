import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ title }) {
  return (
    <header className="header">
      <h1 className="header__title">
        {title}
      </h1>
      <Navigation />
    </header>
  );
}

Header.defaultProps = {

};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
