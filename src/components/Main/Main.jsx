import React from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';

import './Main.css';

const Main = () => (
  <main className="app">
  <Welcome />
  <Header />
  <Articles />
</main>
);

export default Main;
