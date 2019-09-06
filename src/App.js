import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';
import Article from './components/article/article';

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Header />
      <Article />
    </React.Fragment>
  );
}

export default App;
