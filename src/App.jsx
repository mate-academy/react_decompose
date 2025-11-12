import React from 'react-dom/client';
import './App.css';
import Welcome from './components/Welcome/Welcome.jsx';
import Header from './components/Header/Header.jsx';
import Article from './components/Article/Article.jsx';

export default function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}
