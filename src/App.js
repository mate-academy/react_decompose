import React from 'react';
import './App.css';
import './components/css/section.css';
import './components/css/header.css';
import './components/css/article.css';
import { Section } from './components/js/Section';
import { Header } from './components/js/Header';
import { Article } from './components/js/Article';
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
