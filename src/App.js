import React from 'react';

import './App.css';

import WelcomeSection from './components/WelcomeSection';
import Header from './components/Header';
import Article from './components/Article';

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
