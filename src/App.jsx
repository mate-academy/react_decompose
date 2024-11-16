import React from 'react';
import './App.css';
import Welc from './components/Welcome/Welcome';
import Head from './components/Header/Header';
import Artic from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welc />
      <Head />
      <Artic />
    </main>
  );
}

export default App;
