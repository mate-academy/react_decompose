import React from 'react';
import './App.css';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';

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
