import React from 'react';
import Head from './head/Head';
import Content from './content/Content';

import './MainContent.css';

const MainContent = () => (
  <article className="article">
    <Head />
    <Content />
  </article>
);

export default MainContent;
