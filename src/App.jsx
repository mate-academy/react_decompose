import React from 'react';
import './App.css';
import { Article } from './components/Article';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
// Move each BEM block to a separate component (file) and import them here

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
