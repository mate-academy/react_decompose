import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Article from './components/Article/Article';
import './components/styles/App.css';

export function App() {
  return (
    <main className="app">
      <Banner />
      <Header />
      <Article />
    </main>
  );
}
