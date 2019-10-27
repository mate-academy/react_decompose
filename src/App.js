import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Article from './components/article1/Article';
import Article2 from './components/article2/Article2';
import Article3 from './components/article3/Article3';
import Footer from './components/footer/Footer';
import Bottom from './components/bottom/Bottom';

function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
      <Article2 />
      <Article3 />
      <Footer />
      <Bottom />
    </>
  );
}

export default App;
