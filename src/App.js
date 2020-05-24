import React from 'react';
import './App.css';
import './components/header/Header.css';
import './components/article/Article.css';
import './components/welcome/Welcome.css';
import Article from './components/article/Article';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';

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
