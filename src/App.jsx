import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Welcome />
    <Article />
  </div>
);

export default App;
