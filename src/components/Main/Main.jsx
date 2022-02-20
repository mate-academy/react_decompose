import React from 'react';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default Main;
