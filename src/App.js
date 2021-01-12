import React from 'react';
import './App.css';
import Welcome from './components/components_js/Welcome';
import Header from './components/components_js/Header';
import Article from './components/components_js/Article';

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
