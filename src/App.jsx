import React from 'react';
import './App.css';
import Story from './components/Article/Article';
import Greetings from './components/Welcome/Welcome';
import Head from './components/Header/Header';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Greetings />
      <Head />
      <Story />
    </main>
  );
}

export default App;
