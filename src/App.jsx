import React from 'react';
import './App.css';
import OwnArticle from './components/Article/Article';
import MyHeader from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

const App = () => (
  <main className="app">
    <Welcome />
    <MyHeader />
    <OwnArticle />
  </main>
);

export default App;
