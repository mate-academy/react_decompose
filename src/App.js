import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Headline />
    </main>
  );
}

export default App;
