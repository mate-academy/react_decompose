import React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './Article/Article';
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
