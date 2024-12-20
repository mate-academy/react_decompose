import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Welcome/Welcome.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
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
