import React from 'react';
import './App.css';
import WelcomeSection from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

const App = () => (
  <main className="app">
    <WelcomeSection />
    <Header />
    <Article />
  </main>
);

export default App;
