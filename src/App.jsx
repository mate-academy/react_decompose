import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';

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
