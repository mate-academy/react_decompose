import React from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

const Main = () => (
  <div>
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  </div>
);

export default Main;
