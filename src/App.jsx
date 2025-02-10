import React from 'react';
import './App.css';

import { Header, Welcome, Article } from './components';

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
