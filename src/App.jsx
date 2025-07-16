import React from 'react';
import './App.css';
import PageHeader from './components/Header/Header';
import PageWelcome from './components/Welcome/Welcome';
import PageArticle from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <PageHeader />
      <PageWelcome />
      <PageArticle />
    </main>
  );
}

export default App;
