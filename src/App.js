import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Articles from './components/articles/Articles';
import Welcome from './components/welcome/Welcome';

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
