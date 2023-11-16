import React from 'react';
import './App.css';
import TestdHeader from './components/Header/Header';
import TestdArticle from './components/Article/Article';
import TestdWelcome from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <TestdWelcome />
    <TestdHeader />
    <TestdArticle />
  </main>
);

export default App;
