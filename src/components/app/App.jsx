import React from 'react';
import Header from '../header/Header';
import './App.css';
import Welcome from '../welcome/Welcome';
import Article from '../article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
