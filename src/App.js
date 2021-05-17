import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Content from './components/content/Content';

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
