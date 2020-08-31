import React from 'react';
import './App.css';
import Article from './components/article/article';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
