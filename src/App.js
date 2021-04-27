import React from 'react';
import './components/welcome/Welcome.css';
import './components/header/Header.css';
import './components/articles/Articles.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Articles from './components/articles/Articles';

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
