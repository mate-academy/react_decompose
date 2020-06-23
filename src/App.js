import React from 'react';
import './App.css';
import { Article } from './components/article/Article';
import { Header } from './components/header/Header';
import { Section } from './components/section/Section';

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
