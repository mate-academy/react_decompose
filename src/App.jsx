import React from 'react';
import Atricle from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcome />
      <Atricle />
    </main>
  );
}

export default App;
