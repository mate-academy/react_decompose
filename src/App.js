import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { Article } from './components/Article';

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
