import React from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import AppArticle from './components/AppArticle';
import AppWelcome from './components/AppWelcome';

function App() {
  return (
    <main className="app">

      <AppWelcome />
      <AppHeader />
      <AppArticle />

    </main>
  );
}

export default App;
