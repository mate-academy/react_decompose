import React from 'react';
import './App.css';
import A from './components/Article/Article';
import './components/Article/Article.css';
import H from './components/Header/Header';
import './components/Header/Header.css';
import N from './components/Navigation/Navigation';
import './components/Navigation/Navigation.css';
import W from './components/Welcome/Welcome';
import './components/Welcome/Welcome.css';

const App = () => (
  <main className="app">
    <W />
    <H />
    <N />
    <A />
  </main>
);

export default App;
