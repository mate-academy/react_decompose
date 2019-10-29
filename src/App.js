import React from 'react';
import './App.css';
import Welcome from '../src/components/welcome/Welcome';
import Header from '../src/components/header/Header';
import Article from '../src/components/article/Article';

function App() {
  const welcomeText = 'Sticky Header!';
  const headerTitle = 'Site Name';
  const articleTitle = 'Headline';

  return (
    <>
      <Welcome text = {welcomeText} />
      <Header title = {headerTitle} />
      <Article title = {articleTitle}/>
    </>
  );
}

export default App;
