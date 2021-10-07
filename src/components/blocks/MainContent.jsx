import React from 'react';
import Article from './Article';
import Welcome from './Welcome';
import Header from './Header';

export default MainContent;

function MainContent() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}
