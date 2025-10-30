import React from 'react';
import './App.css';
import { Article } from './components/Article/Article';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
    </>
  );
}

export default App;
