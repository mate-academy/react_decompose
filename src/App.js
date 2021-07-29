import React from 'react';
import './App.css';
import Wellcome from './components/wellcome/Wellcome';
import Header from './components/header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Wellcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
