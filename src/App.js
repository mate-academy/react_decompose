import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Content from './components/content';
import Welcome from './components/welcome';

function App() {
  return (
    <>
      <Main />
      <Welcome />
      <Header />
      <Content />
    </>
  );
}

export default App;
