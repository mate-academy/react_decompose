import React from 'react';
import './App.css';
import Welc from './components/Welcome/Welcome';
import Head from './components/Header/Header';
import Art from './components/Article/Article';

const App = () => (
  <main className="app">
    <Welc />
    <Head />
    <Art />
  </main>
);

export default App;
