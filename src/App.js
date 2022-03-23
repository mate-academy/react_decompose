import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Welcome/Welcome';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

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
