import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import W from './components/Welcome/Welcome';
import H from './components/Header/Header';
import A from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <W />
      <H />
      <A />
    </main>
  );
}

export default App;
