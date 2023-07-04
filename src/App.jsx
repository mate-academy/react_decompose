import React from 'react';
import './App.css';
import Articles from './components/Article/Article';
import Welcomes from './components/Welcome/Welcome';
import Headers from './components/Header/Header';

const App = () => (
  <main className="app">
    <Welcomes />
    <Headers />
    <Articles />
  </main>
);

export default App;
