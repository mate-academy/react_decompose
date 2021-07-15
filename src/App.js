import React from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';
import Section from './Section';

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
