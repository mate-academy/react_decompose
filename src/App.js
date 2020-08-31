import React from 'react';
import Header from './components/Header/Header';
import ContentHeader from './components/ContentHeader/ContentHeader';
import MainContent from './components/MainContent/MainContent';

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
