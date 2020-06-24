import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ className, title, paragraphs }) => (
  <article className={className}>
    <h1 className={`${className}__title`}>{title}</h1>
    <p className={`${className}__paragraph`}>{paragraphs[0]}</p>
    <p className={`${className}__paragraph`}>{paragraphs[1]}</p>
    <p className={`${className}__paragraph`}>{paragraphs[2]}</p>
    <p className={`${className}__paragraph`}>{paragraphs[3]}</p>
    <p className={`${className}__paragraph`}>{paragraphs[4]}</p>
  </article>
);

Article.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
