import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = props => (
  <p className="article__paragraph">{props.text}</p>
);

Paragraph.defaultProps = {
  text: '',
};

Paragraph.propTypes = {
  text: PropTypes.string,
};

export default Paragraph;
