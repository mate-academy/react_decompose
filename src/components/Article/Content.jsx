import React from 'react';
import './ArticleParagraph.css';

// eslint-disable-next-line react/prop-types
const Content = ({ paragraph }) => (
  <p className="article__paragraph">
    {paragraph}
  </p>
);

export default Content;
