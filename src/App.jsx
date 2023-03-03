import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Header from './components/Header/Header.jsx';
import Article from './components/Article/Article.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <>
      <main className="app" />
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </>

  );
}

export default App;
