import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
    </>
  );
};

export default App;
