import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { Article } from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />

    <h1>1</h1>
  </main>
);

export default App;
