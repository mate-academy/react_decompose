import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

// eslint-disable-next-line no-unused-vars
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
