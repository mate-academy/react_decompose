import React from 'react';
import './App.css';
import FirstView from './components/FirstView/FirstView';
import Header from './components/Header/Header';
import ArticleContent from './components/ArticleContent/ArticleContent';

function App() {
  return (
    <main className="app">
      <FirstView />
      <Header />
      <ArticleContent />
    </main>
  );
}

export default App;
