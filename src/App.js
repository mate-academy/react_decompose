import React from 'react';
import './App.css';
import WelcomePage from './components/welcome/welcome';
import Header from './components/header/header';
import Article from './components/article/article';

function App() {
  return (
    <main className="app">
      <WelcomePage />
      <Header />
      <Article />
    </main>
  );
}

export default App;
