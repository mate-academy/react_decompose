import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <h1 className="article__title">{props.text}</h1>
);

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
