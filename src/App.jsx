import React from 'react';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';

import './App.css';
import './components/Article/Article.css';
import './components/Welcome/Welcome.css';
import './components/Navigation/Navigation.css';
import './components/Header/Header.css';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
