import React from 'react';
import './App.css';
import './components/header/header.css';
import './components/article/article.css';
import './components/section/section.css';
import Header from './components/header/header';
import Article from './components/article/article';
import Section from './components/section/section';

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
