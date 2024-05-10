import React from 'react';
import './App.scss';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Article from './components/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
