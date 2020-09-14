import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
// import { func } from 'prop-types';

function App() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article />
    </main>
  );
}

export default App;
