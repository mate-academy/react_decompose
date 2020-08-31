import React from 'react';
import Header from './Header';
import ContentHeader from './ContentHeader';
import MainContent from './MainContent';

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
