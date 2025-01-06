import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import SpanWelcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <SpanWelcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
