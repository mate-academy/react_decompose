import React from 'react';

import './App.css';
import { Welcome } from './components/Welcome/Welcome.jsx'
import { Header } from './components/Header/Header.jsx'
import { Navigation } from './components/Navigation/Navigation.jsx'
import { Article } from './components/Article/Article.jsx'

export default App;

const App = () => (
  <div>
    <Welcome />
    <Header />
    <Navigation />
    <Article />
  </div>
);
