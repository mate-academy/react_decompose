import React from 'react';
import Welcome from './components/welcome';
import Header from './components/header';
import Article from './components/article';

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
