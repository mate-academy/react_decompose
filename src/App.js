import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Article from './components/articles/Article';

function App() {
  return (
    <main className="app">
      <Welcome text="Sticky Header!" />
      <Header text="Site Name" />
      <Article />
    </main>
  );
}

export default App;
