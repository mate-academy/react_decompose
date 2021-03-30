import React from 'react';
import './app.css';
import { Welcome } from './components/Welcome';
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

export { App };
