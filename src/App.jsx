import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Welc from './components/Welcome/Welcome';
import Art from './components/Article/Article';
import Head from './components/Header/Header';

const App = () => (
  <main className="app">
    <Welc />
    <Head />
    <Art />
  </main>
);

export default App;
