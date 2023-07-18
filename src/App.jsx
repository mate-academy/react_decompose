import React from 'react';
import './App.scss';
// Move each BEM block to a separate component (file) and import them here
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome/Welcome';
import { Navigation } from './components/Navigation/Navigation';

const App = () => (
  <div>
    <Welcome />
    <Navigation />
    <Header />
    <Article />
  </div>
);

export default App;
