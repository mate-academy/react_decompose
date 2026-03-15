import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
// Create an App function returning the HTML of the whole page


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
