import React from 'react';
import Welcome from './components/article/article';
import Header from './components/welcome/welcome';
import Article from './components/header/header';

import './css/main.css';
import './css/welcome.css';
import './css/header.css';
import './css/navigation.css';
import './css/article.css';

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
