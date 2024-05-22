import React from 'react';
import './App.css';
import Head from './components/Header/Header';
import Articles from './components/Article/Article';
import Greating from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Greating />
    <Head />
    <Articles />
  </main>
);

export default App;
