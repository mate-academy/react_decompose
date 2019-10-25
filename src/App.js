import React from 'react';
import './App.css';
import Welcome from '../src/components/welcome/Welcome'
import Header from '../src/components/header/Header'
import Article from '../src/components/article/Article'



function App() {
  const welcomeTitle = 'Sticky Header!';
  const headerTitle = 'Site Name';
  const articleTitle = 'Headline';

  return (
    <>
      <Welcome title = {welcomeTitle} />
      <Header title = {headerTitle} />
      <Article title = {articleTitle}/>
    </>
  );
}

export default App;
