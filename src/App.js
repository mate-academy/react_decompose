import React from 'react';
import Welcom from './components/Welcome';
import Header from './components/Header';
import Acricle from './components/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Welcom />
      <Header />
      <Acricle />
    </main>
  );
}

export default App;
