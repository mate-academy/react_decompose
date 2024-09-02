import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
    <Navigation />
  </main>
);

export default App;
