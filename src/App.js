import React from 'react';
import './App.css';
import WelcomeSection from './components/welcome_section/welcome_section';
import Header from './components/header/header';
import Articles from './components/articles/articles';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <Header />
      <Articles />
    </main>
  );
}

export default App;
