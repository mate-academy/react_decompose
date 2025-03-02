import React from 'react';
import PageWelcome from './components/Welcome/Welcome';
import PageHeader from './components/Header/Header';
import PageArticle from './components/Article/Article';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

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
