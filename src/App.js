import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Header from './components/header';
import Article from './components/article';

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
