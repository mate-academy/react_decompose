import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <Navigation />
    <Header />
    <Article />
  </main>
);

export default App;
