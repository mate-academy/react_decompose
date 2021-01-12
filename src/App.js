import React from 'react';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <Header />
      <Article />
    </main>
  );
}

export default App;
