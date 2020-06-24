import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Article/Article.module.css';

const Paragraph = ({ text }) => (
  <p className={styles.article__paragraph}>
    {text}
  </p>
);

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
