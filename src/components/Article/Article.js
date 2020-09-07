import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

function Article({ heading, children }) {
  return (
    <article className="article">
      <h1 className="article__title">{heading}</h1>
      {children}
    </article>
  );
}

Article.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Article;
