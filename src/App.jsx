import React from 'react';
import './App.css';

import { Welcome, Header, Article } from './components';

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
