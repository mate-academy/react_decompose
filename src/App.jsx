import React from 'react';
import './App.css';

import Ar from './components/Article/Article';
import He from './components/Header/Header';
import We from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <We />
    <He />
    <Ar />
  </main>
);

export default App;
