import React from 'react';
import './App.css';
import Header from './components/js/header';
import Article from './components/js/article';
import Section from './components/js/section';

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
