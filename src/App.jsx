import React from 'react';
import './App.css';
import { CreateWelcome } from './components/Welcome/Welcome';
import { CreateHeader } from './components/Header/Header';
import { Article } from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <CreateWelcome />
    <CreateHeader />
    <Article />
  </main>
);

export default App;
