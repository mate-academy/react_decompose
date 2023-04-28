import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Navigation/Header/Header';
import Welcome from './components/Navigation/Welcome/Welcome';
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
