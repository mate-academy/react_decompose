import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <div>
    <Welcome />
    <Header>
      <Navigation />
    </Header>
    <Article />
  </div>
);

export default App;
