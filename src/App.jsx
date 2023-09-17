import React from 'react';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import './App.css';

export const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
