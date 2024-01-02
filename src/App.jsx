import React from 'react';
import './App.css';
import Welcomee from './components/Welcome/Welcome';
import Headerr from './components/Header/Header';
import Articlee from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcomee />
    <Headerr />
    <Articlee />
  </main>
);

export default App;
