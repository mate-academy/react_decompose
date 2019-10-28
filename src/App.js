import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import Bottom from './components/bottom/Bottom';

function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
      <Article />
      <Article text="abcdefghijklmonpqrstuvwxyz" />
      <Footer />
      <Bottom />
    </>
  );
}

export default App;
