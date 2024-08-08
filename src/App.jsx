import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';

const App = () => (
  <main className="app">
    <Welcome />
    <Article />
    <Header />
  </main>
);

export default App;
