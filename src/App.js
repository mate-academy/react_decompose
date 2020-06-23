import React from 'react';
import './App.css';
import { Welcome } from './components/main/Welcome';
import { Header } from './components/main/Header';
import { Article } from './components/main/Article';

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
