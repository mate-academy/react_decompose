import React from 'react';
import './App.css';
import { CreateWelcome } from './components/Welcome/Welcome';
import { CreateHeader } from './components/Header/Header';
import { CreateArticle } from './components/Article/Article';

const App = () => (
  <main className="app">
    <CreateWelcome />
    <CreateHeader />
    <CreateArticle />
  </main>
);

export default App;
