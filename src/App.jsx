import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Article } from './components/Article';
import { Section } from './components/Section';
// Move each BEM block to a separate component (file) and import them here

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
