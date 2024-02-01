import React from 'react';
import './App.css';
import Head from './components/Header/Header';
import Welco from './components/Welcome/Welcome';
import Artic from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welco />
    <Head />
    <Artic />

  </main>
);

export default App;
