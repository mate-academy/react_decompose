import React from 'react';
import './App.css';
import Wellcome from './components/Welcome/Welcome';
import Hheader from './components/Header/Header';
import Arrticle from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Wellcome />
    <Hheader />
    <Arrticle />
  </main>
);

export default App;
