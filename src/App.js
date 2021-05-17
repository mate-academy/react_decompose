import React from 'react';
import './App.css';
import Welcome from './components/files/Welcome';
import Header from './components/files/Header';
import Article from './components/files/Article';

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
