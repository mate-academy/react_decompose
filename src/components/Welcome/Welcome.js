import React from 'react';
import PropTypes from 'prop-types';
import s from './Welcome.module.css';

function Welcome(props) {
  const { classWrapper, classText, text } = props;

  return (
    <section className={s[`${classWrapper}`]}>
      <span className={s[`${classText}`]}>{text}</span>
    </section>
  );
}

Welcome.propTypes = {
  classWrapper: PropTypes.string,
  classText: PropTypes.string,
  text: PropTypes.string,
};

Welcome.defaultProps = {
  classWrapper: '',
  classText: '',
  text: '',
};

export default Welcome;
