import React from 'react';
import './App.css';
import Art from './components/Article/Article';
import PageWelcome from './components/Welcome/Welcome';
import PageHeader from './components/Header/Header';

function App() {
  return (
    <main className="app">
      <PageWelcome />
      <PageHeader />;
      <Art />
    </main>
  );
}

export default App;
