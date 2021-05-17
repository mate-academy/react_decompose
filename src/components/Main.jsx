import React from 'react';
import Header from './header/Header';
import Welcome from './welcome/Welcome';
import Articles from './articles/Articles';
import './main.css';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Articles />
  </main>
);

export default Main;
