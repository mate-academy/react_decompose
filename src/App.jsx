import React from 'react';
import './App.css';
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Welcome } from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Welcome />
    <Header>
      <Navigation />
    </Header>
    <Article />
  </main>
);

export default App;
