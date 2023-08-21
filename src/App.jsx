import React from 'react';
import './App.css';
// eslint-disable-next-line
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line
import Header from './components/Header/Header';
// eslint-disable-next-line
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
