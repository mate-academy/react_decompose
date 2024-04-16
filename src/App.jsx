import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <div className="App">
    <Header />
    <Welcome />
    <Article />
  </div>
);

export default App;
