import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Welcome />
      <Article />
    </div>
  );
}

export default App;
