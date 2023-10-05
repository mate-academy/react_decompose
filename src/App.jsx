import React from 'react';
import './App.css';
import RootWelcome from './components/Welcome/Welcome';
import Root from './components/Article/Article';
import RootHeader from './components/Header/Header';

const App = () => (
  <main className="app">
    <RootWelcome />
    <RootHeader />
    <Root />
  </main>
);

export default App;
