import React from 'react';
import Welcome from './components/welcome';
import Header from './components/header';
import Article from './components/article';

import './components/welcome.scss';
import './components/header.scss';
import './components/article.scss';
import './App.scss';

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
