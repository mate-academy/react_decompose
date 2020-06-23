import React from 'react';
import './App.css';
import { Welcome } from './components/welcome/welcome';
import { Article } from './components/article/article';
import { Header } from './components/header/header';

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
