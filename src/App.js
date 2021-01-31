import React from 'react';
import './components/App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Article from './components/Article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
