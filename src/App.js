import React from 'react';
import './App.css';
import './components/welcome/welcome.css';
import './components/header/header.css';
import './components/article/article.css';

import Article from './components/article/article';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';

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
