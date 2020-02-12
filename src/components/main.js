import React from 'react';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import Header from './Header/Header';
import Article from './Article/Article';

function Main() {
  return (
    <main className="app">
      <WelcomeSection />
      <Header />
      <Article />
    </main>
  );
}

export default Main;
