import React from 'react';
import './App.css';
import Welcome from './components/welcomeComponent/Welcome';
import Header from './components/headerComponent/Header';
import Article from './components/articleComponent/Article';

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
