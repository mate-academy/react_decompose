import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { Section } from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Header />
      <Section />
      <Article />
    </main>
  );
}

export default App;
