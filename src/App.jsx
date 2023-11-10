import React from 'react';
import './App.css';
import Articles from './components/Article/Article';
import Head from './components/Header/Header';
import Wellcome from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Wellcome />
    <Head />
    <Articles />
  </main>
);

export default App;
