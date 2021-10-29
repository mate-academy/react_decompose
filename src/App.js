import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Article } from './components/Article';

export function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}
