import React from 'react';
import './App.css';
import { Section } from './components/Welcome/Welcome';
import { Heder } from './components/Header/Header';
import { Article } from './components/Article/Article';

const App = () => (
  <main className="app">
    <Section />
    <Heder />
    <Article />
  </main>
);

export default App;
