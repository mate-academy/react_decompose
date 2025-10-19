import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <div className="app">
      <Welcome />
      <Header />
      <Article />
    </div>
  );
}

export default App;
