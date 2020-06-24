import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/Paragraph';
import './article.css';

const Article = ({ articleClass, articleText, paragraphText }) => (
  <article className={articleClass}>
    <h2 className={`${articleClass}__title`}>{articleText}</h2>
    {paragraphText.map(paragraph => (
      <Paragraph
        paragraphClass={`${articleClass}__paragraph`}
        paragraphText={paragraph}
        key={paragraph}
      />
    ))}
  </article>
);

Article.propTypes = {
  articleClass: PropTypes.string.isRequired,
  articleText: PropTypes.string.isRequired,
  paragraphText: PropTypes.isRequired,
};

export { Article };
