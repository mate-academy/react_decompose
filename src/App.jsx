import React from 'react';
import './App.css';
import { Article, Header, Welcome } from './components';

const App = () => (
  <main className="app">
    <Welcome />
    <Header />
    <Article />
  </main>
);

export default App;
