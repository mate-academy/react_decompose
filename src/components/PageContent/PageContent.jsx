import React from 'react';
import ArticleContent from './ArticleContent/ArticleContent';

function PageContent() {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      <ArticleContent />
    </article>
  );
}

export default PageContent;
