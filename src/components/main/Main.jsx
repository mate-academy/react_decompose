import React from 'react';
import Welcome from '../welcome/Welcome';
import Header from '../header/Header';
import Articles from '../article/Article';
import './Main.css';

const Main = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Articles />
  </main>
);

export default Main;
