import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { Article } from './components/Article/Article';
import { Navigation } from './components/Navigation/Navigation';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Navigation />
    <Article />
  </main>
);

export default App;
