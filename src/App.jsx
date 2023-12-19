import React from 'react';
import './App.css';
import Artcl from './components/Article/Article';
import Head from './components/Header/Header';
import Wlcm from './components/Welcome/Welcome';

const App = () => (
  <main className="app">
    <Wlcm />
    <Head />
    <Artcl />
  </main>
);

export default App;
