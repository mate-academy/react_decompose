import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Article(props) {
  const { textArticle } = props;

  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      {textArticle.map(article => (
        <p key={article.id} className="article__paragraph">
          {article.text}
        </p>
      ))}
    </article>
  );
}

Article.propTypes = {
// eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  textArticle: PropTypes.array,
};
export default Article;
