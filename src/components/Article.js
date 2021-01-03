import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ paragraphs }) => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    {paragraphs.map(({ id, text }) => (
      <p key={id} className="article__paragraph">
        {text}
      </p>
    ))}
  </article>
);

Article.propTypes = {
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
