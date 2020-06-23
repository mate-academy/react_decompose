import React from 'react';
import './Article.css';
import Paragraph from '../Paragraph/Paragraph';

import paragraphTextList from './parapraphText';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraph text={paragraphTextList['1']} />
    <Paragraph text={paragraphTextList['2']} />
    <Paragraph text={paragraphTextList['3']} />
    <Paragraph text={paragraphTextList['4']} />
    <Paragraph text={paragraphTextList['5']} />
  </article>
);

export default Article;
