import React from 'react';
import './App.css';
import Section from './components/js/section';
import Header from './components/js/header';
import Article from './components/js/article';

function App() {
  return (
    <>
      <Section className="welcome" />
      <Header />
      <Article />
    </>
  );
}

export default App;
