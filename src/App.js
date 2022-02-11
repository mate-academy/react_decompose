import React from 'react';
import './App.css';
import Welcome1 from './components/Welcome/Welcome';
import Artical from './components/Article/Article';
import Header from './components/Header/Header';

function App() {
  return (
    <main className="app">
      <Welcome1 />
      <Header />
      <Artical />
    </main>
  );
}

export default App;
