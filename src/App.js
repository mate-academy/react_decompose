import React from 'react';
import './App.css';
import './components/css/navigation.css';
import './components/css/welcome.css';
import Welcome from './components/js/welcome';
import Header from './components/js/header';
import Article from './components/js/article';

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
