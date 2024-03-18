import React from 'react';
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { Welcome } from './components/Welcome/Welcome';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

export const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
    <Navigation />
  </main>
);
