/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcome />
    </main>
  );
}

export default App;
