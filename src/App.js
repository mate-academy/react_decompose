import React from 'react';
import './App.css';
import WelcomeSection from './components/WelcomeSection';
import Header from './components/Header';
import ArticleSection from './components/ArticleSection';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <Header />
      <ArticleSection />
    </main>
  );
}

export default App;
