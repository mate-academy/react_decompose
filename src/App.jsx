import React from 'react';
import './App.css';
import A from './components/Article/Article';
import H from './components/Header/Header';
import N from './components/Navigation/Navigation';
import W from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <W />
    <H />
    <N />
    <A />
  </main>
);

export default App;
