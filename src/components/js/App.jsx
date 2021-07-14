import React from 'react';
import '../css/App.css';
import Welcome from './Welcome';
import Header from './Header';
import Article from './Article';

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
