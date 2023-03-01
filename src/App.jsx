import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
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
