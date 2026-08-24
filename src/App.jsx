import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import WelcomeSection from './components/Welcome/Welcome';
import HeaderComponent from './components/Header/Header';
import ArticleSection from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <HeaderComponent />
      <ArticleSection />
    </main>
  );
}

export default App;
