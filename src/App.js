import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

const App = () => (
  <>
    <Welcome />
    <Header />
    <Article />
  </>
);

export default App;
