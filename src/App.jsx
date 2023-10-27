import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

import './App.css';
// Move each BEM block to a separate component (file) and import them here
import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Welcome/Welcome.css';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
