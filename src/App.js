import React from 'react';
import Welcome from './components/Welcome/Welcome';
import HeaderNav from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <HeaderNav />
      <Article />
    </main>
  );
}

export default App;
