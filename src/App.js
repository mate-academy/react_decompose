import React from 'react';
import Welcome from './jsx/welcome';
import Header from './jsx/header';
import Article from './jsx/article';

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
