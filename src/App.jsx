import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Wellcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <Wellcome />
    <Header />
    <Article />
  </main>
);

export default App;
