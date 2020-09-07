import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

function Banner({ children }) {
  return (
    <section className="welcome">
      <span className="welcome__text">{children}</span>
    </section>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
