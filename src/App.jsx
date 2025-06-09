import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </div>
  );
}
