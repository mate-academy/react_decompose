import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welcome />
      ,
      <Header>
        <Navigation />
      </Header>
      ,
      <Article />
      ,
    </main>
  );
}

export default App;
