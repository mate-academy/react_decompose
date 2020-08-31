import React from 'react';
import './App.css';
import Welcome from './Welcom';
import Header from './Header';
import Article from './Article';

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
