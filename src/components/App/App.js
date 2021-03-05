import React from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
