import React from 'react';
import './App.css';
import WelcomeBlock from './components/Welcome/Welcome';
import HeaderBlock from './components/Header/Header';
import ArticleBlock from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeBlock />
      <HeaderBlock />
      <ArticleBlock />
    </main>
  );
}

export default App;
