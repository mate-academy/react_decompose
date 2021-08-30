import React from 'react';
import './App.css';
import Welcome from './components/Welcome/welcome/Welcome';
import Header from './components/Welcome/Header/Header';
import Article from './components/Welcome/article/Article';

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
