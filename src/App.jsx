import React from 'react';
import './App.css';
import Hearder from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Hearder />
      <Article />
      <Welcome />
    </main>
  );
}

export default App;
