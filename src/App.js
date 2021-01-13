import React from 'react';
import './App.css';
import WelcomeBlock from './components/welcomeBlock/WelcomeBlock';
import Header from './components/header/Header';
import Article from './components/article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeBlock />
      <Header />
      <Article />
    </main>
  );
}

export default App;
