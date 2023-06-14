import React from 'react';
import './App.css';
import Navigation from './Navigation';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Navigation />
    </main>
  );
}

export default App;
