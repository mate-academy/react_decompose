import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import content from './lib/article1.json';
import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome text="Sticky Header!" />
      <Header title="Site Name" />
      <Article content={content} />
    </main>
  );
}

export default App;
