import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Greeting />
      <Header />
      <Article />
    </main>
  );
}

export default App;
