import React from 'react';
import './App.css';
import Header from './components/header/header';
import Article from './components/article/article';
import Welcome from './components/section_welcome/welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
