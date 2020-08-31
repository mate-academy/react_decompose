import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Header from './components/Header';
import Article from './components/Article';

function App() {
  return (
    <main className="app">
      <Introduction />
      <Header />
      <Article />
    </main>
  );
}

export default App;
