import React from 'react';
import './App.css';
import { Article } from './Article';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Welcome } from './Welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
