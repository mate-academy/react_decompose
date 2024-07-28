import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
