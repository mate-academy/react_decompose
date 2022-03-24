import React from 'react';
import './main.css';
import Welcome from './Welcome/Welcome';
import Header from './Header/Header';
import Article from './Article/Article';

const MainContent = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default MainContent;
