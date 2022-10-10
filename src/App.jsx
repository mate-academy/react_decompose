import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
    </main>
  );
}

export default App;
