import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Welcome />
        <Article />
        <Navigation />
      </main>
    </>
  );
}

export default App;
