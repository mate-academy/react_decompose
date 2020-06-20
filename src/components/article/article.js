import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './paragraph/paragraph';
import './article.css';

const Article = ({ title, items }) => (
  <article className="article">
    <h1 className="article__title">{title}</h1>
    {items.map((el, i) => (
      <Paragraph text={el} key={i.toString()} />
    ))}
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.objectOf(Object).isRequired,
};

export { Article };
