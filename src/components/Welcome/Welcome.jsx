import React from 'react';
import './Welcome.css';
import Header from '../Header/Header';
import Article from '../Article/Article';

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
    <Header />
    <Article />
  </section>
);

export default Welcome;
