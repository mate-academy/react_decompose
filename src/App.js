import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import {
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  title,
} from './constants/mocContent';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';
import Content from './components/Article/Content';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <>
      <Title title={title.main} />
      <Header className="header">
        <h1 className="header__title">{title.header}</h1>
        <Navigation />
      </Header>
      <Article className="article">
        <h1 className="article__title">{title.article}</h1>
        {[paragraph1, paragraph2, paragraph3, paragraph4, paragraph5]
          .map((p, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Content paragraph={p} key={i} />
          ))}
      </Article>
    </>
  );
}

export default App;
