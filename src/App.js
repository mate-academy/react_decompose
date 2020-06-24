import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

function App() {
  return (
    <main className="app">
      <Welcome text="Sticky Header!" />
      <Header siteName="Site name" />
      <Article headline="Headline" />
    </main>
  );
}

export default App;
