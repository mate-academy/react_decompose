import React from 'react';
import WelcomePage from '../welcome/welcome';
import Header from '../header/header';
import Article from '../article/article';

import './general.css';

const General = () => (
  <main className="app">
    <WelcomePage />
    <Header />
    <Article />
  </main>
);

export default General;
