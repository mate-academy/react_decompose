import React from 'react';
import './App.css';

import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import ArticleBlock from './components/ArticleBlock/ArticleBlock';

function App() {
  return (
    <main className="app">
      <WelcomeSection />
      <HeaderBlock />
      <ArticleBlock />
    </main>
  );
}

export default App;
