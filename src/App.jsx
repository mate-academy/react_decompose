import React from 'react';
import './App.css';
import Welcom from './components/Welcome/Welcome';
import Headers from './components/Header/Header';
import Articl from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcom />
    <Headers />
    <Articl />
  </main>
);

export default App;
