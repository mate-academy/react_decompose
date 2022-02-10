import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Artical from './components/Artical/Artical';
import Header from './components/Header/Header';

// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Artical />
    </main>
  );
}

export default App;
