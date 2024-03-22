import React from 'react';
import './App.css';

// Move each BEM block to a separate component (file) and import them here
import AtricleComp from './components/Article/Article';
import HeaderComp from './components/Header/Header';
import WelcomeComp from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <WelcomeComp />
    <HeaderComp />
    <AtricleComp />
  </main>
);

export default App;
