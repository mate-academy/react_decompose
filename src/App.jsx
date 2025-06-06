import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
// eslint-disable-next-line import/no-named-as-default, no-unused-vars
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header';
// eslint-disable-next-line no-unused-vars
import Article from './components/Article/Article';

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
