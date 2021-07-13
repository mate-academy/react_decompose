import React from 'react';
import './App.css';
import FirstView from './components/FirstView/FirstView';
import Header from './components/Header/Header';
import PageContent from './components/PageContent/PageContent';

function App() {
  return (
    <main className="app">
      <FirstView />
      <Header />
      <PageContent />
    </main>
  );
}

export default App;
