import React from 'react';
import './App.css';
import RootWelcome from './components/Welcome/Welcome';
import Root from './components/Article/Article';
import { Header } from './components/Header/Header';

const App = () => (
  <main className="app">
    <RootWelcome />
    <Header />
    <Root />
  </main>
);

export default App;
