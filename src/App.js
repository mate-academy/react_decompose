import React from 'react';
import './App.css';
import StickyHeader from './components/sticky-header/sticky-header';
import Header from './components/header/header';
import Article from './components/article/article';

function App() {
  return (
    <main className="app">
      <StickyHeader />
      <Header />
      <Article />
    </main>
  );
}

export default App;
