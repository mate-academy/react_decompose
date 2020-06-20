import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './paragraph/paragraph';
import './article.css';

const Article = props => (
  <article className="article">
    <h1 className="article__title">{props.title}</h1>
    {props.paragraphs.items.map((el, i) => (
      <Paragraph text={el} key={i.toString()} />
    ))}
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.objectOf(Object).isRequired,
};

export { Article };
