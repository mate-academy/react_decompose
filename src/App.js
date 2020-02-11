import React from 'react';
import './App.css';
import Welcome from './components/main_js/Welcome';
import Header from './components/main_js/Header';
import Article from './components/main_js/Article';

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
