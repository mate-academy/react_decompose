import React from 'react';
import './App.css';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Wellcome from '../Welcome/Welcome';

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
