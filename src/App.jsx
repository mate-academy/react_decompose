import React from 'react';
import Header from './Header';
import Article from './Article';
import Section from './Section';
import './App.scss';
import './welcome.scss';
import './header.scss';
import './navigation.scss';
import './article.scss';

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
