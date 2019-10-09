import React from 'react';
import './App.css';
import Article from './components/Article/Article.js';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Welcome from './components/Welcome/Welcome.js';

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
