import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Nav from './components/Nav/Nav';
// Move each BEM block to a separate component (file) and import them here
export default function App() {
  return (
    <main className="app">
      <Header />
      <Nav />
      <Welcome />
      <Article />
    </main>
  );
}