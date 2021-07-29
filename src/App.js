import React from 'react';
import './App.css';
import './components/articleStyles.css';
import './components/headerStyles.css';

import Header from './components/header.js';
import Article from './components/article.js';

function App() {
  return (
    <main className="app">
      <Header />
      <Article />
    </main>
  );
}

export default App;
