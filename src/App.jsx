import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import WelcomeSection from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

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
