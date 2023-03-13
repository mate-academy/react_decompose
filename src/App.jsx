import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <div>
        <Welcome />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Article />
      </div>
    </main>
  );
}

export default App;
