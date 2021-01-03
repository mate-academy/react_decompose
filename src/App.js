import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Article } from './components/Article';
import { paragraphs } from './api/paragraphs';
import { navlinks } from './api/navlinks';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header navlinks={navlinks} />
      <Article paragraphs={paragraphs} />
    </main>
  );
}

export default App;
