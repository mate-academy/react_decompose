import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import './components/Article/Article.css';
import Welcome from './components/Welcome/Welcome';
import './components/Welcome/Welcome.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
