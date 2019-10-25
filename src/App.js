import React from 'react';
import './css/reset.css';
import './css/welcome.css';
import './css/header.css';
import './css/article.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/article/Article';

function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
    </>
  );
}

export default App;
