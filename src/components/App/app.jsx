import React from 'react';
import Article from '../Article/article';
import Header from '../Header/header';
import Welcome from '../Welcome1/welcome';
import './app.css';

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
