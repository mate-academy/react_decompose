import React from 'react';

// components
import Welcome from './components/Welcome';
import Article from './components/Article';
import Header from './components/Header';

// style
import './App.css';

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
