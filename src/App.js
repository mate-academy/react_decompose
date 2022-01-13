import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './header/header';
import Navigation from './navigation/navigation';
import Article from './article/article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Navigation />
      <Article />
    </main>
  );
}

export default App;
