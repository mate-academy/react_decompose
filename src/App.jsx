import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Header />
    <Article />
    <Welcome />
  </main>
);

export default App;
