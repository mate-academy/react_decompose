import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './header/header';
import Article from './article/article';

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
