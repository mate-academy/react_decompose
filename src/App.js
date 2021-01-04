import React from 'react';
import './components/App.css';
import Section from './components/section';
import Header from './components/header';
import Article from './components/article';

function App() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article />
    </main>
  );
}

export default App;
