import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Title from './components/Title';

function App() {
  return (
    <main className="app">
      <Title />
      <Navigation />
      <Main />
    </main>
  );
}

export default App;
