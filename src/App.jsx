import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Welcome/Welcome.css';

const App = () => (
  <main className="app">
    <Header />
    <Welcome />
    <Article />
  </main>
);

export default App;
