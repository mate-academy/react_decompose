import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ className, title, paragraphs }) => (
  <article className={className}>
    <h1 className={`${className}__title`}>{title}</h1>
    {paragraphs.map(paragraph => (
      <p
        key={paragraph.slice(0, 5)}
        className={`${className}__paragraph`}
      >
        {paragraph}
      </p>
    ))}
  </article>
);

Article.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
