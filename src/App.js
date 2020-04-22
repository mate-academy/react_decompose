import React from 'react';
import NavHeader from './components/NavHeader/NavHeader';
import StickyHeader from './components/StickyHeader/StickyHeader';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <StickyHeader />
      <NavHeader />
      <Article />
    </main>
  );
}

export default App;
