import React from 'react';
import Welcome from './components/welcome/Welcome';
import './App.scss';
import Header from './components/header/Header';
import Article from './components/articles/Article';

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
