import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';
import Article from './components/article/article';

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
