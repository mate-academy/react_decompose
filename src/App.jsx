import React from 'react';
import './App.css';
import PageWelcome from './components/Welcome/Welcome';
import PageHeader from './components/Header/Header';
import PageArticle from './components/Article/Article';

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
