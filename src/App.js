import React from 'react';
import './normalize.css';
import Greeting from './components/greeting/greeting';
import Header from './components/header/header';
import Main from './components/main/main';



function App() {
  return (
    <>
      <Greeting/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
