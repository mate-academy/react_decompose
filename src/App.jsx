import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Article />
    <Header />
    <Navigation />
    <Welcome />
  </main>
);

export default App;
