import React from 'react';
import Article from '../Article/Article';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default Main;
