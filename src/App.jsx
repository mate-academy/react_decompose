import React from 'react';
import './App.css';
import Menu from './components/Header/Header';
import Text from './components/Article/Article';
import Top from './components/Welcome/Welcome';

// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Top />
      <Menu />
      <Text />
    </main>
  );
}

export default App;
