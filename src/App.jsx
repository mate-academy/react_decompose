import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
};

export default App;
