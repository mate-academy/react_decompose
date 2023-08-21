import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Content from './components/Article/Content';
// Move each BEM block to a separate component (file) and import them here


const App = () => (
  <main className="app">
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    < Header />
    < Article
    content={content[0]}
    content1={content[1]}
    content2={content[2]}
    content3={content[3]}
    content4={content[4]}
    />

  </main>
);

export default App;
