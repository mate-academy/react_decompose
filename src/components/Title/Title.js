import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { classTitle, text } = props;

  return (
    <h1 className={classTitle}>{text}</h1>
  );
}

Title.propTypes = {
  classTitle: PropTypes.string,
  text: PropTypes.string,
};

Title.defaultProps = {
  classTitle: '',
  text: '',
};
export default Title;
