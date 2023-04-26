import React from 'react';
import './App.css';
import './components/Header/Header.scss';
import './components/Welcome/Welcome.scss';
import './components/Article/Article.scss';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Articles from './components/Article/Article';

// Move each BEM block to a separate component (file) and import them here

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
