import React from 'react';
import './App.css';
import Wellcome from './components/Wellcome/Wellcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Wellcome />
      <Header />
      <Article />
    </>
  );
}

export default App;
