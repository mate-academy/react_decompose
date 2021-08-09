import React from 'react';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

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
