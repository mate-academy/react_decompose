import React from 'react';
import './App.css';
import './components/Welcome/Welcome.css';
import './components/Header/Header.css';
import './components/Article/Article.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

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
