import React from 'react';
import Arcticle from '../Article/Arcticle';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import './main.css';

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
