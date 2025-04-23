import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Header from './components/Header/Header';
// eslint-disable-next-line import/no-named-as-default
import Article from './components/Article/Article';
// eslint-disable-next-line import/no-named-as-default
import Welcome from './components/Welcome/Welcome';
import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Welcome/Welcome.css';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
