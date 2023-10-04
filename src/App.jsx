import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <main className="app">
    <Header />
    <Article />
    <Welcome />
    <Navigation />
  </main>
);

export default App;
