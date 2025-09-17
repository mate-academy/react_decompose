import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import './App.css'; // тут залишимо лише глобальні стилі

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </div>
  );
}

export default App;
