// src/App.jsx
import React from 'react';
import './App.css'; // Importa o CSS global
import Welcome from './components/Welcome/Welcome'; // Importa o componente Welcome
import Header from './components/Header/Header';     // Importa o componente Header
import Article from './components/Article/Article';   // Importa o componente Article

function App() {
  return (
    <main className="app">
      <Welcome />    {/* Usa o componente Welcome */}
      <Header />     {/* Usa o componente Header, que já contém Navigation */}
      <Article />    {/* Usa o componente Article */}
    </main>
  );
}

export default App;