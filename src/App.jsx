import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import './App.css';
import './components/Header/Header.css';
import './components/Article/Article.css';
import './components/Welcome/Welcome.css';

// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <div>
      <Header />
      <main className="app">
        <Welcome />
        <Article />
      </main>
    </div>
  );
}

export default App;
