import React from 'react';

import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Article from '../Article/Article';

const Main = () => (
  <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
);

export default Main;
