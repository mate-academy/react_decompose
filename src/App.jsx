import React from 'react';
import './App.css';
import Welcome from './components/Navigation/Welcome/Welcome';
import Header from './components/Navigation/Header/Header';
import Article from './components/Navigation/Article/Article';

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
