import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Section from './components/Welcome/Welcome';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Section />
    <Header />
    <Article />
  </main>
);

export default App;
