import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Header from './components/Header/Header';

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
