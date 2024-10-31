import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import TheArticle from './components/Article/Article';
import TheHeader from './components/Header/Header';
import TheWelcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <TheWelcome />
      <TheHeader />
      <TheArticle />
    </main>
  );
}

export default App;
