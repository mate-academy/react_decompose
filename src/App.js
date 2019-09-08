import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';
import Article from './components/article/article';


function App() {
  return (
    <>
      <Welcome title="Sticky Header!"/>
      <Header title="Site Name"/>
      <Article title="Headline" />
    </>
  );
}

export default App;
