import React from 'react';
import Welcome from './components/main/welcome/Welcome';
import Header from './components/main/header/Header';
import Article from './components/main/article/Article';
import './App.scss';

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
