import React from 'react';
import './App.scss';
import './media.scss';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Article from './components/article/Article';

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
