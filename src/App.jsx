import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Section from './components/Welcome/Welcome';

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
