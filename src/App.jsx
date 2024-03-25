import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <div>
    <Article />
    <Header />
    <Welcome />
  </div>
);

export default App;
