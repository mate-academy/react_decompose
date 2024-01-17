import React from 'react';
import './App.css';
import Welkome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welkome />
    <Header />
    <Article />
  </main>
);

export default App;
