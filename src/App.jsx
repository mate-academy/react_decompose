import React from 'react';
import './App.css';

import WelcomeHeader from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <WelcomeHeader />

    <Header />

    <Article />
  </main>
);

export default App;
