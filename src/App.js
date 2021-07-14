import React from 'react';
import Welcome from './components/article/article';
import Header from './components/welcome/welcome';
import Article from './components/header/header';

import './components/css/main.css';
import './components/css/welcome.css';
import './components/css/header.css';
import './components/css/navigation.css';
import './components/css/article.css';

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
