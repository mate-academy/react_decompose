import React from 'react';
import './App.css';
import PageArticle from './components/Article/Article';
import PageWelcome from './components/Welcome/Welcome';
import PageHeader from './components/Header/Header';

function App() {
  return (
    <main className="app">
      <PageWelcome />
      <PageHeader />
      <PageArticle />
    </main>
  );
}

export default App;
