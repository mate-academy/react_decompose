import React from 'react';
import './App.css';
import Header from './components/Header/Header'; // Import the Header component
import Welcome from './components/Welcome/Welcome'; // Import the Welcome component
import Article from './components/Article/Article'; // Import the Article component
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
