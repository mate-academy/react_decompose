import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { Arrticle } from './components/Article/Article';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Navigation />
      <Arrticle />
    </main>
  );
}

export default App;
