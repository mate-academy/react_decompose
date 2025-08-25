import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line import/no-named-as-default
import Header from './components/Header/Header';
// eslint-disable-next-line import/no-named-as-default
import Article from './components/Article/Article';
// eslint-disable-next-line import/no-named-as-default
import Navigation from './components/Navigation/Navigation';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
