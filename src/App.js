import React from 'react';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Article from './components/Article';
import './styles/app.css';

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
