import React from 'react';
import './App.css';
import Articale from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Articale />
    </main>
  );
}

export default App;
