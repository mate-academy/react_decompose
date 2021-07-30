import React from 'react';
import './App.css';
import './components/articleStyles.css';
import './components/headerStyles.css';
import './components/welcome.css';

import Header from './components/header';
import Article from './components/article';
import { Welcome } from './components/welcome';

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
