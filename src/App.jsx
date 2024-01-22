import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Article />
    <Header />
  </main>
);

export default App;
