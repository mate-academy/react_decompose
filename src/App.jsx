import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />

    <Header>
      <Navigation />
    </Header>

    <Article />
  </main>
);

export default App;
