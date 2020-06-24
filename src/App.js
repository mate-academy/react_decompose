import React from 'react';
import './App.css';
import { Welcome } from './components/section/Welcome';
import { Header } from './components/header/Header';
import { Article } from './components/article/Article';

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
