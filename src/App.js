import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
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
