import React from 'react';
import './Main.css';
import './Media.css';
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
