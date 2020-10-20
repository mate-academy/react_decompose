import React from 'react';

import './App.css';

import WelcomeSection from './components/welcomeSection/WelcomeSection';
import Header from './components/header/Header';
import Article from './components/article/Article';

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
