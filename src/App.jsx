import React from 'react';
import './App.css';
import Section from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Section />

    <Header />

    <Article />
  </main>
);

export default App;
