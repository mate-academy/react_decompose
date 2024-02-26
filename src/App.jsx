import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import { Article } from './components/Article';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Welcome } from './components/Welcome';

export const App = () => (
  <main className="app">
    <Welcome />

    <Header />

    <Article />
  </main>
);

export default App;
