import React from 'react';
import './App.css';
import Article from '../Article/Article';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';

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
