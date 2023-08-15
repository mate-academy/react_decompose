import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import ArticleA from './components/Article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <ArticleA />
  </main>
);

export default App;
