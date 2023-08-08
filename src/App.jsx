import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Navigation />
    <Article />
  </main>
);

export default App;
