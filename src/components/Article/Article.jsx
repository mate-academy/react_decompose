import React from 'react';
import ArticleTitle from './ArticleTitle/ArticleTitle';
import ArticleText from './ArticleText/ArticleText';
import './Article.css';

const Article = () => (
  <article className="article">
    <ArticleTitle />
    <ArticleText />
  </article>
);

export default Article;
