import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <div>
      {' '}
      <Welcome /> <Header /> <Article /> <main className="app" />{' '}
    </div>
  );
}

export default App;
