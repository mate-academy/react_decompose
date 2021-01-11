import React from 'react';
import './App.css';
import Section from './components/newComponents/Section';
import Header from './components/newComponents/Header';
import Article from './components/newComponents/Article';

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
