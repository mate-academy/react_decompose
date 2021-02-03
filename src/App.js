import React from 'react';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Banner />
      <Header />
      <Article />
    </main>
  );
}

export default App;
