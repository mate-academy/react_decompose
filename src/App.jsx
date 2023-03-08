import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Artcle from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Artcle />
    </main>
  );
}

export default App;
