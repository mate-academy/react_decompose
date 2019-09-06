import React from 'react';
import './App.css';
import Welcome from './components/StickyHeader/StickyHeader';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

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
