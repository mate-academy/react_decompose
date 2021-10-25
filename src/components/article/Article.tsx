import React from 'react';
import './Article.css';

type Props = {
  children: [];
};

const Article: React.FC<Props> = ({ children }) => (
  <article className="article">{children}</article>
);

export default Article;
