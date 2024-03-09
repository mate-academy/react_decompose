import React from 'react';
import './App.css';
import Artic from './components/Article/Article';
import Head from './components/Header/Header';
import Welc from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Welc />
    <Head />
    <Artic />
  </main>
);

export default App;
