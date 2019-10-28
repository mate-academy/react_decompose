import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
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
