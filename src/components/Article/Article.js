import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

function Article({ content }) {
  return (
    <article className="article">
      <h1 className="article__title">
        {content.title}
      </h1>
      {content.paragraphs.map(text => (
        <p
          className="article__paragraph"
          key={text}
        >
          {text}
        </p>
      ))}
    </article>
  );
}

Article.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Article;
