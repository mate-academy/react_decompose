import React from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Welcome from './Welcome';

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
