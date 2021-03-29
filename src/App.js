import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Content />
    </main>
  );
}

export default App;
