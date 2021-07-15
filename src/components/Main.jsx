import React from 'react';
import WelcomSection from './WelcomeSection/WelcomeSection';
import Header from './Header/Header';
import Article from './Article/Article';

const Main = () => (
  <main className="app">
    <WelcomSection />
    <Header />
    <Article />
  </main>
);

export default Main;
