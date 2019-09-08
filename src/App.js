import React from 'react';
import './App.css';

import StickyHeader from './components/StickyHeader/StickyHeader';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <>
      <StickyHeader />
      <Header />
      <Article />

    </>
  );
}

export default App;
