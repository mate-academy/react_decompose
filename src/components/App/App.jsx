import React from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';

import './App.css';

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
