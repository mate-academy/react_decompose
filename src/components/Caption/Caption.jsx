import React from 'react';
import PropTypes from 'prop-types';

export default function Caption(props) {
  return (
    <h1 className={props.article__title}>{props.text}</h1>
  );
}

Caption.propTypes = {
  text: PropTypes.string.isRequired,
  article__title: PropTypes.string.isRequired,
};
