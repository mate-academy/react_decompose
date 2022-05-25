import React from 'react';
import './App.css';
import Article from './components/Welcome/article/Article';
import Header from './components/Welcome/header/header';
import Welcome from './components/Welcome/welcome/Welcome';

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
