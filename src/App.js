import React from 'react';

import './App.css';

import WelcomeSection from './components/welcomeSection/WelcomeSection';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Article from './components/article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
