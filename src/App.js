import React from 'react';
import './App.css';

import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <>
        <Section />
        <Header />
        <Article />
      </>
    </main>
  );
}

export default App;
