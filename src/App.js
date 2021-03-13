import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Arcticle from './components/Article/Arcticle';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Arcticle />
    </main>
  );
}

export default App;
