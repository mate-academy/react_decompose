import React from 'react';
import SectionWelcome from './components/SectionWelcome/SectionWelcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

import './App.css';

function App() {
  return (
    <main className="app">
      <SectionWelcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
