import React from 'react';
import './App.css';
import './components/Article/Article.css';
import './components/Header/Header.css';
import './components/Navigation/Navigation.css';
import './components/Welcome/Welcome.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <div>
      <Welcome />
      <Header />
      <Article />
    </div>
  );
}

export default App;
