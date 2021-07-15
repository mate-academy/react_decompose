import React from 'react';
import Section from '../section/section';
import Header from '../header/header';
import Article from '../article/article';
import './app.css';

function App() {
  return (
    <main className="app">
      <Section />
      <Header />
      <Article />
    </main>
  );
}

export default App;
