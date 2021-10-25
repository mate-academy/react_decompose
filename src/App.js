import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import Articles from './components/Articles/Articles';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Navigation />
      <Articles />
    </main>
  );
}

export default App;
