import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <div>
      <h1>Mate React App</h1>
      <Header />
      <Welcome />
      <Article />
    </div>
  );
}

export default App;
