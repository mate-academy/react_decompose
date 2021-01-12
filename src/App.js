import React from 'react';
import './App.css';
import Header from './components/header/js_header';
import Welcome from './components/welcome/js_welcome';
import Article from './components/article/js_article';

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
