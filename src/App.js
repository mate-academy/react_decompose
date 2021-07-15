import React from 'react';
import './App.css';
import Article from './components/article/article';
import Header from './components/header/header';
import Wellcome from './components/wellcome/wellcome';

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
