import React from 'react';
import './App.css';
import MyWelcome from './components/Welcome/Welcome';
import MyHeader from './components/Header/Header';
import MyArticle from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <MyWelcome />
    <MyHeader />
    <MyArticle />
  </main>
);

export default App;
