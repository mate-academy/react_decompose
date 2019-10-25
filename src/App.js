import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/header';
import Article from './components/Article/article';

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
