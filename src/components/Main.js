import React from 'react';
import Welcome from './welcome/welcome';
import Header from './header/header';
import Arcticle from './article/article';

function Main() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Arcticle />
    </main>
  );
}

export default Main;
