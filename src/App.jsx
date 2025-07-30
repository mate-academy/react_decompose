import React from 'react';
import './App.css';
import Head from './components/Header/Header';
import Articl from './components/Article/Article';
import Welc from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welc />
      <Head />
      <Articl />
    </main>
  );
}

export default App;
