import React from 'react';
import './Main.css';
import Welcome from '../Welcome';
import Header from '../Header';
import Article from '../Article';

export default function Main() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}
