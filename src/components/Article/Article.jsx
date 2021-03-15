import React from 'react';
import Paragraph1 from './Paragraphs/Paragraph1';
import Paragraph2 from './Paragraphs/Paragraph2';
import Paragraph3 from './Paragraphs/Paragraph3';
import Paragraph4 from './Paragraphs/Paragraph4';
import Paragraph5 from './Paragraphs/Paragraph5';

import './Article.css';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraph1 />

    <Paragraph2 />

    <Paragraph3 />

    <Paragraph4 />

    <Paragraph5 />

  </article>
);

export default Article;
