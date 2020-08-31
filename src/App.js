import React from 'react';
import Header from './components/Header/Header';
import ContentHeader from './components/ContentHeader/ContentHeader';
import MainContent from './components/MainContent/MainContent';

import './App.css';
import './components/Header/Header.css';
import './components/ContentHeader/ContentHeader.css';
import './components/MainContent/MainContent.css';

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
