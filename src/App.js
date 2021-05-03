import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import './App.css';

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
