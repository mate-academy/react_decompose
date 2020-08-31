import React from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Articles from './components/Articles';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Articles />
    </main>
  );
}

export default App;
