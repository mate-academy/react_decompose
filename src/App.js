import React from 'react';
import TitlePage from './components/TitlePage/TitlePage';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <TitlePage />
      <Header />
      <Article />
    </main>
  );
}

export default App;
