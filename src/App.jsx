import React from 'react';
import './App.css';
import Welcomes from './components/Welcome/Welcome';
import Headers from './components/Header/Header';
import Articles from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcomes />
    <Headers />
    <Articles />
  </main>
);

export default App;
