import React from 'react';
import './App.css';
import Welcome from './components/components_js/welcome';
import Header from './components/components_js/header';
import Navigation from './components/components_js/navigation';
import Article from './components/components_js/article';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header>
        <Navigation />
      </Header>
      <Article />
    </main>
  );
}

export default App;
