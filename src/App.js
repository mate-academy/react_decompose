import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Article from './Article';
import './App.scss';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
