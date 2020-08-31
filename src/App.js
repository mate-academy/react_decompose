import React from 'react';
import Header from './components/Welcome/Welcome';
import ContentHeader from './components/Navigation/Navigation';
import MainContent from './components/MainContent/Article';

import './App.css';

function App() {
  return (
    <main className="app">
      <Header />
      <ContentHeader />
      <MainContent />
    </main>
  );
}

export default App;
