import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

function Paragraph({ children }) {
  return <p className="article__paragraph">{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
