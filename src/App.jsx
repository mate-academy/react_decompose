import React from 'react';
import './App.scss';
import { Article } from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here
import { Header } from './components/Header/Header';

export const App = () => (
  <div>
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    <Header />
    <Article />
  </div>
);
