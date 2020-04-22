import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';
import Content from './components/content/content'

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
