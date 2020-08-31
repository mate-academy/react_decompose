import React from 'react';
import Header from '../Header/Header';
import Article from '../Article/Article';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

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
