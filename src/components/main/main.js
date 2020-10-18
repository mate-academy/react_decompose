import React from 'react';
import WelcomePage from '../welcome/welcome';
import Header from '../header/header';
import Article from '../article/article';

import './main.css';

const Main = () => (
  <main className="app">
    <WelcomePage />
    <Header />
    <Article />
  </main>
);

export default Main;
