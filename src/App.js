import React from 'react';
import './normalize.css';
import Greeting from './components/Greeting/greeting';
import Header from './components/Header/header';
import Article from './components/Article/article';

function App() {
  return (
    <>
      <Greeting/>
      <Header/>
      <Article/>
    </>
  );
}

export default App;
