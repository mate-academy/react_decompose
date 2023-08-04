import React from 'react';
import Hero from './components/Welcome/Welcome';
import Nav from './components/Header/Header';
import Content from './components/Article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Hero />
    <Nav />
    <Content />
  </main>
);

export default App;
