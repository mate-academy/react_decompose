import React from 'react';
import './App.css';
import Article from './Article';
import header from './Header';
import welcome from './Welcome';

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
