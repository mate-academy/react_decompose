import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Hearder from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Hearder />
      <Article />
    </main>
  );
}

export default App;
