import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Article />
    </div>
  );
}

export default App;
