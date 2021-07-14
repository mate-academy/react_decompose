import React from 'react';
import Welcome from '../article/article';
import Header from '../welcome/welcome';
import Article from '../header/header';

import './app.css';
import '../welcome/welcome.css';
import '../header/header.css';
import '../header/navigation.css';
import '../article/article.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Article />
      <Welcome />
    </main>
  );
}

export default App;
