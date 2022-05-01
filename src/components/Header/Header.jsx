import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      {props.children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
Header.defaultProps = {
  children: PropTypes.node,
};

export default Header;
