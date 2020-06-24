import React from 'react';
import './App.css';
import { Section } from './components/Section/Section';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { links, paragraps } from './data';

function App() {
  return (
    <main className="app">
      <Section
        sectionClass="welcome"
        sectionText="Sticky Header!"
      />
      <Header
        headerClass="header"
        headerText="Site Name"
        navClass="navigation"
        navLinks={links}
      />
      <Article
        articleClass="article"
        articleText="Headline"
        paragraphText={paragraps}
      />
    </main>
  );
}

export default App;
