import React from 'react';
import './App.css';
import WelcomSection from './components/WelcomeSection/WelcomeSection';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

const App = () => (
  <main className="app">
    <WelcomSection />
    <Header />
    <Article />
  </main>
);

export default App;
