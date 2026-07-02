import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </>
  );
}

// Move each BEM block to a separate component (file) and import them here

export default App;
