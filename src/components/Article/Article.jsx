import React from 'react';
import './Article.scss';
import Title from './Title/Title';
import Paragraph from './Paragraph/Paragraph';

const Article = () => (
  <article className="article">
    <Title />
    {Paragraph.first()}
    {Paragraph.second()}
    {Paragraph.third()}
    {Paragraph.fourth()}
    {Paragraph.fifth()}
  </article>
);

export default Article;
