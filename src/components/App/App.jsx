import React from 'react';
import './App.css';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

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
