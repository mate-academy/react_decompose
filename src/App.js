import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SectionWelcome from './components/Section__Welcome/Section__Welcome';
import Article from './components/Article';

function App() {
  return (
    <main className="app">
      <SectionWelcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
