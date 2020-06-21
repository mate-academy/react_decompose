import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

function Article({ articleClass, articleText, paragraphText }) {
  const paragraphs = paragraphText.map(paragraph => (
    <Paragraph
      paragraphClass={`${articleClass}__paragraph`}
      paragraphText={paragraph}
    />
  ));

  return (
    <article className={articleClass}>
      <h2 className={`${articleClass}__title`}>{articleText}</h2>
      {paragraphs}
    </article>
  );
}

Article.propTypes = {
  articleClass: PropTypes.string.isRequired,
  articleText: PropTypes.string.isRequired,
  paragraphText: PropTypes.isRequired,
};

export default Article;
