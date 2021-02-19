import React from 'react';
import Headline from './Headline';
import Paragraphs from './Paragraphs';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <Headline />
      <Paragraphs />
    </article>
  );
}

export default Article;
