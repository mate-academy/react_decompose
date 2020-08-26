import React from 'react';
import './App.css';
import Article from './components/Article/Article';
import { Welcome } from './components/Welcome/Welcome';
import { Header } from './components/Header/Header';

export const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);
