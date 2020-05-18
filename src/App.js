import React from 'react';
import './App.css';
import Header from './components/Header';
import Artical from './components/Article';
import Welcome from './components/Welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Artical />
    </main>
  );
}

export default App;
