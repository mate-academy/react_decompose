import React from 'react';
import './App.css';
import Welcome from './components/Wellcome/Welcome';
import Article from './components/article/Aticle';
import Header from './components/header/Header';

// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Article />
      <Header />
    </main>
  );
}

export default App;
