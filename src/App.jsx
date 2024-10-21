import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Welcome from './components/Welcome/Welcome';
import Product from './components/Product/Product';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <main className="app">
      <Navigation />
      <Welcome />
      <Header />
      <Article />
      <Product 
        title1="Pastel"
        price1={10}
        title="Peperoni Pizza"
        price={100}
      />
    </main>
  );
}

export default App;
