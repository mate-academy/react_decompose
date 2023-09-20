import React from 'react';
import './App.css';
import './components/Article/Article.css'
import './components/Welcome/Welcome.css'
import './components/Header/Header.css'
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
  <Welcome></Welcome>
  <Header></Header>
  <Article></Article>
  </main>
);

export default App;
