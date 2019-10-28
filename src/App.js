import React from 'react';
import './App.css';
import './components/reset.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import './components/media.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  );
}

export default App;
