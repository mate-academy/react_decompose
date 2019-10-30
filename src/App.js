import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Headers from './components/header/Header';
import Article from './components/article/Article';

function App() {
  return (
    <>
      <Welcome />
      <Headers />
      <Article />
    </>
  );
}

export default App;
