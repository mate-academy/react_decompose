import React from 'react';
import Article from '../article/article';
import Header from '../header/header';
import Welcome from '../welcome/welcome';
import './app.css';
// Move each BEM block to a separate component (file) and import them here

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
