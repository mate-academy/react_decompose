import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Article } from './components/Article';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <>
      <Welcome />
      <main className="app">
        <Header />
        <Article />
      </main>
    </>
  );
}

export default App;
