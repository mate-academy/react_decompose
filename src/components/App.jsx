import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Article from './Article';
import './styles/Welcome.css';

function App() {
  return (
    <main className="app">
      <Banner />
      <Header />
      <Article />
    </main>
  );
}

export default App;
