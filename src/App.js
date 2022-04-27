import React from 'react';
// import './App.css';
import './components/Article/Article.scss';
import './components/Header/Header.scss';
import './components/Welcome/Welcome.scss';
import './components/Navigation/Navigation.scss';
import './components/Main/Main.scss';
import Main from './components/Main/Main';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <Main />
  );
}

export default App;
