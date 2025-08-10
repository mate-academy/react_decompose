import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

const App = () => (
  <>
    <Header />
    <Welcome />
    <Article />
  </>
);

export default App;
