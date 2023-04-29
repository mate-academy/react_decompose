import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <>
      <Welcome />
      <main className="app">
        <Header />
        <Article />
      </main>
    </>
  );
}

export default App;
