import React from 'react';
import './App.css';

import { Title } from './components/Title';
import { Header } from './components/Header';
import { Article } from './components/Article';

function App() {
  return (
    <main className="app">
      <Title />
      <Header />
      <Article />
    </main>
  );
}

export default App;
