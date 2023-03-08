import React from 'react';
import './App.css';
import Article from './article';
import header from './header';
import welcome from './welcome';

function App() {
  return (
    <main className="app">
      {welcome}
      {header}
      <Article />
    </main>
  );
}

export default App;
