import React from 'react';
import './Article-title.css';

type Props = {
  children: string;
};

const ArticleTitle:React.FC<Props> = ({ children }) => (
  <h1 className="article__title">{children}</h1>
);

export default ArticleTitle;
