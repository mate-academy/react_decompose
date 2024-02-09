import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
   <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
