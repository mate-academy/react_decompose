import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Articles from './components/Article/Article';

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
