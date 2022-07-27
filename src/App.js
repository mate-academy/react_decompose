import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header siteName="Site Name!" />
      <Article />
    </main>
  );
}

export default App;
