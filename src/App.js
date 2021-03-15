import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Article from './components/article/Article';
import Section from './components/welcome/Welcome';

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
