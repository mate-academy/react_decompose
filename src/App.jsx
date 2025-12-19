import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Welcome />
        <Article />
      </main>
    </div>
  );
}

export default App;
