import React from 'react';
import './App.css';
import { Article } from './components/Article/Article';
import './components/Article/Article.css';
import { Header } from './components/Header/Header';
import './components/Header/Header.css';
import { Navigation } from './components/Navigation/Navigation';
import './components/Navigation/Navigation.css';
import { Welcome } from './components/Welcome/Welcome';
import './components/Welcome/Welcome.css';

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
