import React from 'react';
import './app.css';
import Welcome from '../Welcome/welcome';
import Header from '../Header/header';
import Article from '../Article/article';

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
