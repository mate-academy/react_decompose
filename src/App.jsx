import React from 'react';
import './App.css';
import './components/Welcome/Welcome.css';
import './components/Header/Header.css';
import './components/Navigation/Navigation.css';
import './components/Article/Article.css';
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
