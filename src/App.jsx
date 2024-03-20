import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import Header from './components/Header/Header';
// eslint-disable-next-line import/no-named-as-default
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line import/no-named-as-default
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
