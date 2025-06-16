import React from 'react';
import './App.css';
import MyHeader from './components/Header/Header';
import MyArticle from './components/Article/Article';
import MyWelcome from './components/Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <MyWelcome />
      <MyHeader />
      <MyArticle />
    </main>
  );
}

export default App;
